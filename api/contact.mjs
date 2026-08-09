// Contact & Envoi — fonction serverless Vercel (api/contact.mjs).
//
// Règles respectées :
//  - Destinataires pilotés par la variable d'environnement CONTACT_TO
//    (plusieurs adresses possibles, séparées par des virgules, format vérifié).
//    Aucune adresse n'est écrite en dur dans cette fonction.
//  - Expéditeur : variable CONTACT_FROM (domaine validé côté Resend).
//  - Zéro dépendance npm : fetch natif vers l'API Resend.
//  - Fonctionne sans JavaScript : POST ordinaire de la page, réponse HTTP 303.
//  - Anti-spam : champ leurre « chambres_detail » caché, pas de captcha.
//  - Échec : jamais de faux « merci ». Le visiteur revient sur /contact avec un
//    fragment d'erreur, la page affiche le motif et propose le téléphone.
//
// La saisie du visiteur ne repart JAMAIS dans l'URL. Un nom, un téléphone ou le
// détail d'une demande privée écrits en query string atterrissent dans
// l'historique du navigateur, dans les journaux du serveur et dans l'en-tête
// Referer envoyé aux tiers. Le fragment (#) reste, lui, côté navigateur : il
// n'est jamais transmis au serveur. Le texte saisi est restitué par la page
// elle-même depuis sessionStorage.

const COURRIEL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function rediriger(vers) {
  return new Response(null, { status: 303, headers: { Location: vers } });
}

const echec = (motif) => rediriger(`/contact#erreur-${motif}`);

export async function POST(request) {
  const corps = await request.text();
  const envoye = new URLSearchParams(corps);

  const leurre = (envoye.get('chambres_detail') || '').trim();
  if (leurre.length > 0) {
    console.log('[contact] bloqué : champ leurre rempli');
    return rediriger('/merci?etat=ok');
  }

  const nom = (envoye.get('nom') || '').trim();
  const email = (envoye.get('email') || '').trim();
  const telephone = (envoye.get('telephone') || '').trim();
  const motif = (envoye.get('motif') || '').trim();
  const message = (envoye.get('message') || '').trim();
  const consentement = (envoye.get('consentement') || '') === 'oui';

  if (!message || !email || !COURRIEL.test(email) || !consentement) {
    return echec('validation');
  }

  const cle = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_TO;
  const expediteur = process.env.CONTACT_FROM;

  // La clé était absente de ce contrôle : sans elle, l'appel partait quand même
  // avec « Bearer undefined », Resend répondait 401, et le visiteur lisait
  // « l'envoi n'a pas abouti » au lieu de « service indisponible ».
  if (!cle || !destination || !expediteur) {
    console.error('[contact] RESEND_API_KEY, CONTACT_TO ou CONTACT_FROM manquante');
    return echec('config');
  }

  const destinataires = destination
    .split(',')
    .map((adresse) => adresse.trim())
    .filter((adresse) => COURRIEL.test(adresse));

  if (destinataires.length === 0) {
    console.error('[contact] CONTACT_TO invalide');
    return echec('config');
  }

  const messagerie =
    `Nom : ${nom}\n` +
    `E-mail : ${email}\n` +
    `${telephone ? 'Téléphone : ' + telephone + '\n' : ''}` +
    `Demande : ${motif || '—'}\n\n` +
    message;

  try {
    const reponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cle}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: expediteur,
        to: destinataires,
        subject: `Site officiel — ${motif || 'demande'}`,
        text: messagerie,
        reply_to: [email]
      })
    });

    if (!reponse.ok) {
      const detail = (await reponse.text()).slice(0, 300);
      console.error(`[contact] Resend ${reponse.status} : ${detail}`);
      return echec('envoi');
    }

    console.info('[contact] envoyé à', destinataires.join(', '));
    return rediriger('/merci?etat=ok');
  } catch (cause) {
    console.error('[contact] exception :', cause);
    return echec('envoi');
  }
}
