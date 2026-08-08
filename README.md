# Bas-Bréau — bas-breau.com

Nouveau site officiel de l'Hôtellerie du Bas-Bréau (22 Grande Rue, 77630 Barbizon).

## Stack

- [Astro](https://astro.build) (génération statique, zéro JavaScript côté client)
- TypeScript — toutes les données vérifiées sont dans `src/data/`
- Images AVIF/WebP servies par le pipeline d'Astro
- Hébergement prévu : Vercel (`vercel.json` : redirections 301 des anciennes URLs
  de l'ancien site bas-breau.com, en-têtes de sécurité)
- Formulaire de contact : fonction serverless `api/contact.mjs` (Resend),
  vars d'environnement `CONTACT_TO`, `CONTACT_FROM`, `RESEND_API_KEY`

## Commandes

```sh
npm run dev      # prévisualisation locale
npm run build    # génération dans dist/
npm run preview  # sert dist/
```

## Architecture

- `src/data/` — chaque fichier est daté et cite sa source (S1 site officiel,
  S2 registre public, S3 ancien site, S4 fiches publiques).
- `src/lib/oeuvres.ts` — registre des images du domaine.
- `src/layouts/Canevas.astro` — gabarit (fichier atlas, en-tête, pied).

Le déploiement n'intervient qu'après validation par le client.

## Déploiement Vercel

- **Node.js ≥ 22.12** requis (Astro 7). Vercel sélectionne la version via le
  champ `engines` de `package.json` ; si le projet affiche un vieux runtime
  (Node 20), vérifier **Settings → Build and Deployment → Node.js Version**.
- `vercel.json` fixe explicitement `buildCommand` et `outputDirectory` (`dist`)
  pour que le build passe même si le framework n'est pas détecté.
- Variables d'environnement à créer dans le projet (Settings → Environment
  Variables) : `CONTACT_TO`, `CONTACT_FROM`, `RESEND_API_KEY` — sinon le
  formulaire redirige vers `/contact` avec le code `config`.
- Après import, un déploiement de prévisualisation est créé à chaque push sur
  `main` ; état visible sur l'onglet **Deployments**.