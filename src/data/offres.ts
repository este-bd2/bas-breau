// TARIFS & SÉJOURS — source : site officiel [S1], page « Chambres & Suites »,
// relevé 08/08/2026. Les prix affichés sont ceux publiés (« à partir de », par
// nuit pour le tarif public, hors promotions). Aucune condition d'annulation
// n'étant éditée à ce jour sur le site, elles ne sont pas annoncées ici.

export const TARIFS = {
  introduction:
    'Les tarifs ci-dessous sont ceux publiés sur le site de l’hôtel au jour du relevé (08/08/2026). Les prix varient selon la saison et la disponibilité : le tarif garanti est celui du moteur de réservation au moment de la commande.',
  lignes: [
    { gamme: 'Chambre Classique', prix: 'à partir de 130 €', note: 'nuitée, 1-2 personnes' },
    { gamme: 'Chambre Supérieure', prix: 'à partir de 150 €', note: 'nuitée, 1-2 personnes' },
    { gamme: 'Chambre Deluxe', prix: 'à partir de 190 €', note: 'nuitée, 1-2 personnes' },
    { gamme: 'Suite & Junior Suite', prix: 'à partir de 250 €', note: 'nuitée, 1-2 personnes' }
  ],
  supplements: [
    'Le petit déjeuner est proposé sur place ; nous vous conseillons de le mentionner au moment de la réservation.'
  ],
  cta: {
    titre: 'Vérifier le prix du jour',
    texte: 'Le moteur de réservation en ligne affiche les tarifs réels et les disponibilités, sans engagement avant confirmation.',
    bouton: 'Réserver en ligne'
  }
} as const;