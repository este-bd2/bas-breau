// Contact & Envoi — function serverless Vercel (api/contact.mjs).
//
// Règles respectées :
//  - Destinataires pilotés par la variable d'environnement CONTACT_TO
//    (plusieurs adresses possibles, séparées par des virgules, format vérifié).
//    Aucune adresse n'est écrite en dur dans cette fonction.
//  - Expéditeur : variable CONTACT_FROM (domaine validé côté Resend).
//  - Zéro dépendance npm : fetch natif vers l'API Resend.
//  - Fonctionne sans JavaScript : POST ordinaire de la page, réponse HTTP 303.
//  - Anti-spam : champ leurre « chambres_detail » caché, pas de captcha.
//  - Échec : jamais de faux « merci » — retours vers /contact avec le texte
//    conservé, numéro de téléphone affiché, mailto: pré-rempli, et cause
//    journalosrviée dans les logs serveur.

const COURRIEL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function rediriger(vers) {
  return new Response(null, { status: 303, headers: { Location: vers } });
}

function conserve(params, erreur) {
  const q = new URLSearchParams();
  q.set('erreur', erreur);
  for (const cle of ['nom', 'email', 'telephone', 'motif', 'message']) {
    const valeur = (params.get(cle) || '').trim();
    if (valeur) {
      q.set(cle, valeur);
    }
  }
  return q;
}

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
    const q = conserve(envoye, 'validation');
    return rediriger('/contact?' + q.toString());
  }

  const destination = process.env.CONTACT_TO;
  const expediteur = process.env.CONTACT_FROM;
  if (!destination || !expediteur) {
    console.error('[contact] CONTACT_TO ou CONTACT_FROM manquants');
    const q = conserve(envoye, 'config');
    return rediriger('/contact?' + q.toString());
  }

  const destinataires = destination
    .split(',')
    .map((adresse) => adresse.trim())
    .filter((adresse) => COURRIEL.test(adresse));

  if (destinataires.length === 0) {
    console.error('[contact] CONTACT_TO invalide');
    const q = conserve(envoye, 'config');
    return rediriger('/contact?' + q.toString());
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
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
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
      const q = conserve(envoye, 'envoi');
      return rediriger('/contact?' + q.toString());
    }

    console.info('[contact] envoyé à', destinataires.join(', '));
    return rediriger('/merci?etat=ok');
  } catch (cause) {
    console.error('[contact] exception :', cause);
    const q = conserve(envoye, 'envoi');
    return rediriger('/contact?' + q.toString());
  }
}