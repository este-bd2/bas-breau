// ===========================================================================
// IDENTITÉ DE L'ÉTABLISSEMENT — chaque donnée porte sa source et sa date.
// Règle A : rien d'inventé. Une donnée sans source vérifiable n'est pas affichée.
// Relevés effectués le 08/08/2026.
//
// Sources :
//  S1 = site officiel actuel de l'établissement (www.hotelleriedubasbreau.fr), relevé 08/08/2026
//  S2 = registre public Annuaire des entreprises (annuaire-entreprises.data.gouv.fr), fiche 785750696, relevé 08/08/2026
//  S3 = ancien site bas-breau.com (version "démo" figée ~2019), relevé 08/08/2026
//  S4 = Petit Futé / Mappy / Booking.com (fiches de tiers), relevé 08/08/2026
// ===========================================================================

export const etablissement = {
  // [S1] ?? [S3] — l'enseigne historique, telle que publiée des deux côtés
  nom: 'Hôtellerie du Bas-Bréau',
  // [S1] formule courte du positionnement (page accueil)
  sousTitre: 'Hôtel de charme & restaurant, à Barbizon, aux portes de la forêt de Fontainebleau',

  // --- Données légales (mêmes mentions publiées par l'établissement — [S1] pages
  //     "Mentions légales", corroborées par le registre public [S2]) ---
  legal: {
    raisonSociale: 'HOTELLERIE DU BAS BREAU', // [S1] mentions légales + [S2]
    formeJuridique: 'SAS', // [S1] mentions légales + [S2]
    capital: '2 947 455,00 €', // [S1] mentions légales (paru au RCS Melun, décision du 15/05/2023)
    rcs: 'Melun B 785 750 696', // [S1] mentions légales
    siren: '785 750 696', // [S1] + [S2]
    siret: '785 750 696 000 11', // [S1] + [S2]
    tva: 'FR 047 857 506 96', // [S1] + [S2]
    naf: '5510Z — Hôtels et hébergement similaire', // [S2]
    creation: '1862', // [S3] l'ancien site indique 1862 — conservé tel quel (décision client 08/08/2026)
    effectif: '10 à 19 salariés', // [S2] tranche INSEE 2023
    representant: 'Katerine Wu, Présidente', // [S1] mentions légales + [S2]
    dpo: 'Katerine Wu, Présidente', // [S1] mentions légales (responsable des données)
    geocode: { lat: '48.444862055', lon: '2.609713985' } // [S2] coordonnées Insee du siège
  },

  // [S3] l'ancien site annonce 5 étoiles — consigné tel quel (décision client 08/08/2026)
  etoiles: 5,

  contact: {
    adresse: {
      voie: '22 Grande Rue',
      codePostal: '77630',
      ville: 'Barbizon',
      pays: 'France'
    }, // [S1] + [S3], identique des deux côtés
    telephonePrincipal: '+33 1 60 66 40 05', // [S3] ancien site — conservé tel quel (décision client 08/08/2026)
    // [À CONFIRMER] basbreau@wanadoo.fr (ancien site [S3], carte de visite) — non retenu en affichage : l'adresse officielle actuelle a été préférée
    email: 'contact@hotelleriedubasbreau.com', // [S1] contact/réservation officiels
    reseaux: {
      facebook: 'https://www.facebook.com/hotelleriebasbreau',
      instagram: 'https://www.instagram.com/hotelleriebasbreau/',
      linkedin: 'https://www.linkedin.com/company/hotellerie-du-bas-breau/'
    } // [S1] liens officiels du site
  },

  // [S1] "ouvert toute l'année" (Petit Futé [S4] confirme) — pas d'horaires de
  // réception publiés → intentionnellement aucune ligne d'horaires affichée.
  ouvertTouteAnnee: true,

  // Chiffres publiés (préparés pour la page « chiffres réels »)
  chiffres: {
    chambresSuites: 20, // [S1] page Séminaires "Profitez des 20 chambres" + [S4] "20 chambres (3 suites)"
    superficieParcHa: 2, // [S1] page Contact "parc ombragé de 2 hectares"
    distanceChateauFontainebleauKm: 12, // [S4] Mappy/Booking "à 12 km du château de Fontainebleau" + [S3]
    heuresParis: 1 // [S1] "à seulement une heure de Paris" (accueil), cohérent avec [S3] "50 km au sud de Paris"
  },

  // Réservation en ligne — moteur officiel utilisé côté établissement [S1]
  moteurReservation: 'https://secure.reservit.com/fo/booking/2/12816/?langcode=FR',

  // Témoignages publiés par l'établissement lui-même sur son site officiel,
  // page Séminaires & Mariages [S1] — repris mot pour mot, date et prénom d'origine.
  // NOTE : à re-confirmer auprès du client avant mise en ligne si reproduction souhaitée.
  temoignages: [
    {
      texte: 'Nous avons organisé notre mariage dans ce magnifique lieu. Le service, l’organisation et le repas ont été réalisés parfaitement. Nous avons été très heureux et nous vous remercions pour cette très belle journée et soirée.',
      auteur: 'Daniel',
      date: 'Août 2024'
    },
    {
      texte: 'Le personnel est tout simplement incroyable, très inspirant pour nos séminaires d’entreprise. Quelle qualité de service, de bienveillance ! Je n’avais jamais vu cela… aux petits oignons. Le restaurant en vaut la peine également. Merci à toute l’équipe ! Nous reviendrons c’est sûr.',
      auteur: 'Aymeric',
      date: 'Juin 2024'
    },
    {
      texte: 'Nous y avons organisé notre mariage, tout a été parfait. Nous nous sommes laissé porter par l’équipe pour l’organisation du repas (excellent) et du brunch le lendemain. Les invités ont apprécié les chambres, le domaine et la piscine. Nous recommandons chaudement ce lieu pour de tels événements, il est parfaitement adapté.',
      auteur: 'Yanick',
      date: 'Avril 2024'
    }
  ]
} as const;