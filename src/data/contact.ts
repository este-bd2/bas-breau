// FORMULAIRE DE CONTACT — descriptif du formulaire. Destinataire : variable
// CONTACT_TO (voir api/contact.mjs) — jamais d'adresse en dur dans le code.
// Plusieurs destinataires acceptés (séparés par des virgules), format validé.
import { etablissement } from './site';

export const FORMULAIRE = {
  motif: [
    { valeur: 'chambre', libelle: 'Séjour : chambre ou suite' },
    { valeur: 'seminaire', libelle: 'Événement : séminaire, banquet ou mariage' },
    { valeur: 'restaurant', libelle: 'Restaurant : réservation ou privatisation' },
    { valeur: 'autre', libelle: 'Autre demande' }
  ],
  consentement:
    'En envoyant ce message, vous acceptez que les informations saisies soient utilisées pour répondre à votre demande, dans le cadre de la politique de confidentialité du site. Aucune donnée n’est utilisée à d’autres fins.',
  noteRGPD: 'Vos informations ne sont transmises qu’à l’équipe de l’hôtel, dans le seul but de traiter votre demande.'
} as const;

// QUESTIONS FRÉQUENTES — chaque réponse est issue d’une source vérifiée
// ([S1] site officiel, [S7] moteur de réservation officiel, [S4] fiches
// publiques). Pages générées + JSON-LD FAQPage.
export const FAQ = [
  {
    question: 'Comment réserver une chambre ?',
    reponse:
      `Deux moyens : le moteur de réservation en ligne de l’hôtel (bouton « Réserver en ligne », visible en tête de site), ou le téléphone au ${etablissement.contact.telephonePrincipal}.`
  },
  {
    question: 'Le restaurant est-il ouvert ?',
    reponse:
      'Le service habituel du restaurant est temporairement suspendu. En revanche, l’équipe peut vous accueillir sur réservation : séminaires, événements privés, associatifs ou professionnels — demandez un devis via le formulaire de contact.'
  },
  {
    question: 'Y a-t-il un parking ?',
    reponse:
      'Oui : un parking gratuit est à votre disposition, avec des espaces à la fois intérieurs et extérieurs.'
  },
  {
    question: 'Où se trouve l’Hôtellerie du Bas-Bréau exactement ?',
    reponse:
      '22 Grande Rue, 77630 Barbizon, à moins d’une heure de Paris, à environ douze kilomètres du château de Fontainebleau.'
  },
  {
    question: 'Que voir autour de l’hôtel ?',
    reponse:
      'La forêt de Fontainebleau à deux pas, le village des peintres avec ses ateliers et le musée départemental des peintres de Barbizon (92 Grande Rue, ouvert tous les jours sauf mardi).'
  }
] as const;