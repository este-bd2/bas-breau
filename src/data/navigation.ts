// NAVIGATION DU SITE — hiérarchie unique (aucun modèle externe).

export const NAVIGATION = [
  {
    libelle: 'Séjourner',
    enfants: [
      { libelle: 'Chambres & suites', href: '/chambres-suites' },
      { libelle: 'Tarifs & séjours', href: '/tarifs' },
      { libelle: 'Détente & loisirs', href: '/detente-et-loisirs' }
    ]
  },
  {
    libelle: 'Se réunir',
    enfants: [
      { libelle: 'Restaurant & bar', href: '/restaurant' },
      { libelle: 'Séminaires & mariages', href: '/seminaires' }
    ]
  },
  {
    libelle: 'Le lieu',
    enfants: [
      { libelle: 'Histoire', href: '/histoire' },
      { libelle: 'Situation & accès', href: '/situation-et-acces' },
      { libelle: 'Galerie', href: '/galerie' }
    ]
  },
  { libelle: 'Contact', href: '/contact', direct: true }
] as const;