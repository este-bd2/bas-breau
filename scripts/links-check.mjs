/* Vérificateur de liens internes — à lancer après `npm run build`.
 *
 *   npm run check:liens
 *
 * Contrôle trois choses sur le site réellement généré, pas sur les sources :
 *  - chaque lien interne pointe vers une page ou un fichier qui existe ;
 *  - chaque lien possède un intitulé accessible (texte, aria-label ou alt) ;
 *  - aucun marqueur de travail n'a été publié par mégarde.
 *
 * Sort en code 1 si quelque chose cloche, pour pouvoir servir de garde-fou.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const RACINE = 'dist';

if (!existsSync(RACINE)) {
  console.error(`  ${RACINE}/ est absent — lancez d'abord « npm run build ».`);
  process.exit(1);
}

const tous = [];
(function parcourir(dossier) {
  for (const entree of readdirSync(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) parcourir(chemin);
    else tous.push('/' + relative(RACINE, chemin).split(sep).join('/'));
  }
})(RACINE);

const existe = new Set(tous);
const pages = tous.filter((f) => f.endsWith('.html'));

const casses = new Map();
const sansIntitule = new Map();
const marqueurs = new Map();

const MARQUEURS = ['À CONFIRMER', 'A CONFIRMER', 'lorem ipsum', 'TODO', '[S1]', '[S2]', '[S3]', '[S4]'];

for (const page of pages) {
  const html = readFileSync(join(RACINE, page), 'utf8');

  for (const trouve of html.matchAll(/href="(\/[^"]*)"/g)) {
    const cible = trouve[1].split('#')[0].split('?')[0];
    if (!cible || cible.startsWith('/_astro')) continue;
    if (/\.(jpe?g|png|svg|webp|avif|xml|txt|ico|css|js|pdf)$/i.test(cible)) continue;

    const candidats = [
      cible,
      `${cible}/index.html`,
      `${cible.replace(/\/$/, '')}/index.html`,
      `${cible}.html`
    ];
    if (!candidats.some((c) => existe.has(c))) {
      casses.set(cible, (casses.get(cible) ?? 0) + 1);
    }
  }

  for (const lien of html.matchAll(/<a\b[^>]*>(.*?)<\/a>/gs)) {
    const texte = lien[1].replace(/<[^>]*>/g, '').trim();
    const attributs = lien[0];
    const etiquete = /aria-label=|title=/.test(attributs);
    const imageDecrite = /<img[^>]+alt="[^"]+"/.test(attributs);
    if (!texte && !etiquete && !imageDecrite) {
      sansIntitule.set(page, (sansIntitule.get(page) ?? 0) + 1);
    }
  }

  for (const marqueur of MARQUEURS) {
    if (html.includes(marqueur)) {
      marqueurs.set(`${page} :: ${marqueur}`, true);
    }
  }
}

console.log(`  ${pages.length} pages analysées`);

let defauts = 0;

if (casses.size === 0) console.log('  liens internes : aucun cassé');
else
  for (const [cible, n] of [...casses].sort((a, b) => b[1] - a[1])) {
    console.log(`  CASSÉ   ${cible}  (${n}×)`);
    defauts += n;
  }

if (sansIntitule.size === 0) console.log('  intitulés : tous les liens sont nommés');
else
  for (const [page, n] of sansIntitule) {
    console.log(`  SANS INTITULÉ   ${page}  (${n}×)`);
    defauts += n;
  }

if (marqueurs.size === 0) console.log('  marqueurs de travail : aucun publié');
else
  for (const cle of marqueurs.keys()) {
    console.log(`  MARQUEUR PUBLIÉ   ${cle}`);
    defauts += 1;
  }

process.exit(defauts > 0 ? 1 : 0);
