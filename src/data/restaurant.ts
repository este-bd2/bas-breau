// RESTAURANT — source : site officiel de l'établissement [S1], relevé 08/08/2026.
// L'état annoncé par l'établissement lui-même est reproduit.

export const restaurant = {
  titre: 'Le Restaurant du Bas-Bréau',
  statut: 'Service habituel temporairement suspendu',
  annonce: [
    'Le restaurant est temporairement fermé pour le service habituel.',
    'Nous pouvons toutefois vous accueillir sur réservation pour vos séminaires, événements privés, associatifs ou professionnels. N’hésitez pas à nous contacter pour un devis.',
    'Menu et carte brunch dominical à venir.'
  ],
  images: [
    'restaurant-hotel-bas-breau-barbizon-250320-01.jpg',
    'restaurant-hotel-bas-breau-barbizon-250320-02.jpg',
    'restaurant-hotel-bas-breau-barbizon-250320-03.jpg',
    'restaurant-hotel-bas-breau-barbizon-250320-08.jpg'
  ]
} as const;

export const BAR_STEVENSON = {
  nom: "Stevenson's Bar",
  accroche: 'Une cheminée d’époque, un esprit de club.',
  texte:
    'Annoncé parmi les services de l’établissement, le bar de l’hôtel se tient autour d’une cheminée d’époque. Un lieu à part pour finir la soirée, en hiver comme en été.',
  image: 'bas-breau-cheminee.jpg'
} as const;