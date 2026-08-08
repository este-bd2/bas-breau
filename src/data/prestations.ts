// PRESTATIONS — architecture du site. Chaque entrée génère une carte sur le
// hub /prestations et pointe vers une page réelle du site.
// Toutes les accroches sont vérifiées ou prudentes : rien d'inventé.

export const PRESTATIONS = [
  {
    slug: 'chambres-suites',
    titre: 'Chambres & suites',
    accroche: 'Literie soignée, salles de bain douces ou jacuzzi, vue sur le parc.',
    description:
      'Quatre gammes — Classique, Supérieure, Deluxe, Suite & Junior Suite — dans une bâtisse de bourg qui a vu dormir Stevenson.',
    image: 'hotel-bas-breau-cover-1.jpg'
  },
  {
    slug: 'restaurant',
    titre: 'Restaurant & Stevenson’s Bar',
    accroche: 'Une table historique, un bar de cheminée.',
    description:
      'Le restaurant reçoit actuellement sur réservation : séminaires, événements privés, associatifs et professionnels. Le bar, autour de la cheminée d’origine, reste une adresse de fin de journée.',
    image: 'restaurant-hotel-bas-breau-barbizon-250320-04.jpg'
  },
  {
    slug: 'seminaires',
    titre: 'Séminaires, banquets & mariages',
    accroche: 'Vos événements à la carte.',
    description:
      'Trois salles, une grande terrasse, un parc arboré, une piscine chauffée : journées d’études, séminaires résidentiels, banquets, anniversaires, mariages, privatisations.',
    image: 'hotel-bas-breau-mariage-seminaire-cover.jpg'
  },
  {
    slug: 'detente-et-loisirs',
    titre: 'Détente & loisirs',
    accroche: 'La piscine, le parc, la forêt.',
    description:
      'Un parc de deux hectares, une piscine chauffée, la forêt de Fontainebleau à deux pas pour les marcheurs, les coureurs et les grimpeurs.',
    image: 'hostellerie-bas-breau-jardins-fleurs.jpg'
  }
] as const;