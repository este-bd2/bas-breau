// CHAMBRES & SUITES — source : site officiel, page « Chambres & Suites » du
// 08/08/2026. Description, équipements et prix « à partir de » repris tels que
// publiés. Aucun équipement non vérifié n'est ajouté.

export type Chambre = {
  slug: string;
  nom: string;
  superficie: string | null;
  personnes: string;
  prixDepuis: string;
  texte: string[];
  equipements: string[];
  images: string[];
};

export const chambres: Chambre[] = [
  {
    slug: 'chambre-classique',
    nom: 'Chambre Classique',
    superficie: '16 à 20 m²',
    personnes: '1-2 personnes',
    prixDepuis: '130 €',
    texte: [
      'Les chambres classiques disposent de tout le confort pour faire de votre séjour un moment agréable : literie de qualité, lit double ou twin, salle de bain avec baignoire ou douche.'
    ],
    equipements: [
      'Wifi (fibre)',
      'Grand lit ou lits séparés (sur demande)',
      'Petit-déjeuner',
      'Accès piscine'
    ],
    images: [
      'hotel-bas-breau-barizon-chambre-classique-2.jpg',
      'hotel-bas-breau-barizon-chambre-classique-3.jpg'
    ]
  },
  {
    slug: 'chambre-superieure',
    nom: 'Chambre Supérieure',
    superficie: '20 à 30 m²',
    personnes: '1-2 personnes',
    prixDepuis: '150 €',
    texte: [
      'Les chambres supérieures bénéficient d’une salle de bain avec douche et baignoire et d’équipements de grand standing.',
      'Certaines sont même équipées d’un jacuzzi : luxe, calme et volupté, les mots d’un séjour à l’Hôtellerie du Bas-Bréau.'
    ],
    equipements: [
      'Wifi (fibre)',
      'Grand lit ou lits séparés (sur demande)',
      'Petit-déjeuner',
      'Accès piscine',
      'Jacuzzi (certaines chambres)'
    ],
    images: [
      'hotel-bas-breau-barizon-chambre-superieur-1.jpg',
      'hotel-bas-breau-barizon-chambre-superieur-2.jpg'
    ]
  },
  {
    slug: 'chambre-deluxe',
    nom: 'Chambre Deluxe',
    superficie: null,
    personnes: '1-2 personnes',
    prixDepuis: '190 €',
    texte: [
      'Les chambres Deluxe disposent d’une literie de qualité — grand lit ou twin — et d’une salle de bain avec baignoire ou douche.',
      'Une balnéo est possible sur demande.'
    ],
    equipements: [
      'Wifi (fibre)',
      'Grand lit ou lits séparés (sur demande)',
      'Petit-déjeuner',
      'Accès piscine',
      'Balnéo (selon disponibilité)'
    ],
    images: [
      'hotel-bas-breau-barizon-chambre-deluxe-1.jpg',
      'hotel-bas-breau-barizon-chambre-deluxe-2.jpg'
    ]
  },
  {
    slug: 'suite-et-junior-suite',
    nom: 'Suite & Junior Suite',
    superficie: null,
    personnes: '1-2 personnes',
    prixDepuis: '250 €',
    texte: [
      'Les suites comprennent une chambre, un grand salon doté d’un lit d’appoint et une salle de bain avec douche et bain à remous.',
      'Elles donnent sur le parc et les jardins du domaine.'
    ],
    equipements: [
      'Wifi (fibre)',
      'Grand lit ou lits séparés (sur demande)',
      'Petit-déjeuner',
      'Accès piscine',
      'Bain à remous',
      'Vue sur le parc et les jardins'
    ],
    images: [
      'hotel-bas-breau-barizon-chambre-suite-1.jpg',
      'hotel-bas-breau-barizon-chambre-suite-2.jpg'
    ]
  }
];