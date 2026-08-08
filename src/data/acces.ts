// ACCÈS & ENVIRONS — sources : [S1] site officiel, [S3] ancien site bas-breau.com,
// [S4] fiches publiques (Mappy, Booking), [S6] Musée départemental des peintres de
// Barbizon. Relevé le 08/08/2026.

export const ACCES = {
  chapeau:
    'Barbizon est à moins d’une heure de Paris, à douze kilomètres du château de Fontainebleau, au cœur du massif forestier qui a inspiré l’école des peintres de Barbizon.',
  lignes: [
    {
      titre: 'En voiture',
      texte:
        'L’autoroute A6 est un accès direct depuis Paris — une trentaine de minutes depuis le périphérique selon l’ancien site de l’hôtel. Parking gratuit sur place, intérieur et extérieur.'
    },
    {
      titre: 'En train',
      texte:
        'Depuis Paris, prendre la ligne vers la gare de Fontainebleau-Avon, puis quelques kilomètres en taxi ou en voiture jusqu’au village.'
    },
    {
      titre: 'En avion',
      texte:
        'Les aéroports parisiens (Orly, Charles-de-Gaulle) sont à environ une heure et demie de route.'
    }
  ],
  environs: [
    {
      titre: 'La forêt de Fontainebleau',
      texte:
        'Plus de 25 000 hectares de sable, de rochers et de futaies, comme le rappelait déjà l’ancien site : un terrain historique de randonnée et d’escalade aux portes de l’hôtel.'
    },
    {
      titre: 'Barbizon, village des peintres',
      texte:
        'La Grande Rue, les ateliers de Millet et de Rousseau, l’auberge du Père Ganne : le village se découvre à pied, à quelques mètres de l’hôtel.'
    },
    {
      titre: 'Le musée des peintres de Barbizon',
      texte:
        'Au 92 Grande Rue, le musée départemental de Seine-et-Marne est consacré à l’école de Barbizon. Ouvert tous les jours sauf le mardi.'
    }
  ]
} as const;