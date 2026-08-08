// Registre des images du domaine — photos publiées par l'établissement sur son
// site officiel [S1], téléchargées lors du relevé du 08/08/2026.
// Chaque page importe l'image par son nom de fichier.

import type { ImageMetadata } from 'astro';

import basBreauCheminee from '../assets/img/bas-breau-cheminee.jpg';
import basBreauEvenement from '../assets/img/bas-breau-evenement.jpg';
import basBreauParking from '../assets/img/bas-breau-parking.jpg';
import evenementBasBreau1 from '../assets/img/evenement-bas-breau-1.jpg';
import evenementBasBreau2 from '../assets/img/evenement-bas-breau-2.jpg';
import hostellerieParisHotel from '../assets/img/hostellerie-bas-breau-paris-hotel.jpg';
import hostellerieJardinsFleurs from '../assets/img/hostellerie-bas-breau-jardins-fleurs.jpg';
import cover1 from '../assets/img/hotel-bas-breau-cover-1.jpg';
import mariageSeminaireCover from '../assets/img/hotel-bas-breau-mariage-seminaire-cover.jpg';
import chambreClassique2 from '../assets/img/hotel-bas-breau-barizon-chambre-classique-2.jpg';
import chambreClassique3 from '../assets/img/hotel-bas-breau-barizon-chambre-classique-3.jpg';
import chambreDeluxe1 from '../assets/img/hotel-bas-breau-barizon-chambre-deluxe-1.jpg';
import chambreDeluxe2 from '../assets/img/hotel-bas-breau-barizon-chambre-deluxe-2.jpg';
import chambreSuite1 from '../assets/img/hotel-bas-breau-barizon-chambre-suite-1.jpg';
import chambreSuite2 from '../assets/img/hotel-bas-breau-barizon-chambre-suite-2.jpg';
import chambreSuperieur1 from '../assets/img/hotel-bas-breau-barizon-chambre-superieur-1.jpg';
import chambreSuperieur2 from '../assets/img/hotel-bas-breau-barizon-chambre-superieur-2.jpg';
import mariage250402_01 from '../assets/img/mariage-seminaire-bas-breau-barbizon-250402-01.jpg';
import mariage250402_02 from '../assets/img/mariage-seminaire-bas-breau-barbizon-250402-02.jpg';
import mariage250402_08 from '../assets/img/mariage-seminaire-bas-breau-barbizon-250402-08.jpg';
import mariage250402_13 from '../assets/img/mariage-seminaire-bas-breau-barbizon-250402-13.jpg';
import restau250320_01 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-01.jpg';
import restau250320_02 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-02.jpg';
import restau250320_03 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-03.jpg';
import restau250320_04 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-04.jpg';
import restau250320_05 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-05.jpg';
import restau250320_06 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-06.jpg';
import restau250320_07 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-07.jpg';
import restau250320_08 from '../assets/img/restaurant-hotel-bas-breau-barbizon-250320-08.jpg';

export const REGISTRE: Record<string, ImageMetadata> = {
  'bas-breau-cheminee.jpg': basBreauCheminee,
  'bas-breau-evenement.jpg': basBreauEvenement,
  'bas-breau-parking.jpg': basBreauParking,
  'evenement-bas-breau-1.jpg': evenementBasBreau1,
  'evenement-bas-breau-2.jpg': evenementBasBreau2,
  'hostellerie-bas-breau-paris-hotel.jpg': hostellerieParisHotel,
  'hostellerie-bas-breau-jardins-fleurs.jpg': hostellerieJardinsFleurs,
  'hotel-bas-breau-cover-1.jpg': cover1,
  'hotel-bas-breau-mariage-seminaire-cover.jpg': mariageSeminaireCover,
  'hotel-bas-breau-barizon-chambre-classique-2.jpg': chambreClassique2,
  'hotel-bas-breau-barizon-chambre-classique-3.jpg': chambreClassique3,
  'hotel-bas-breau-barizon-chambre-deluxe-1.jpg': chambreDeluxe1,
  'hotel-bas-breau-barizon-chambre-deluxe-2.jpg': chambreDeluxe2,
  'hotel-bas-breau-barizon-chambre-suite-1.jpg': chambreSuite1,
  'hotel-bas-breau-barizon-chambre-suite-2.jpg': chambreSuite2,
  'hotel-bas-breau-barizon-chambre-superieur-1.jpg': chambreSuperieur1,
  'hotel-bas-breau-barizon-chambre-superieur-2.jpg': chambreSuperieur2,
  'mariage-seminaire-bas-breau-barbizon-250402-01.jpg': mariage250402_01,
  'mariage-seminaire-bas-breau-barbizon-250402-02.jpg': mariage250402_02,
  'mariage-seminaire-bas-breau-barbizon-250402-08.jpg': mariage250402_08,
  'mariage-seminaire-bas-breau-barbizon-250402-13.jpg': mariage250402_13,
  'restaurant-hotel-bas-breau-barbizon-250320-01.jpg': restau250320_01,
  'restaurant-hotel-bas-breau-barbizon-250320-02.jpg': restau250320_02,
  'restaurant-hotel-bas-breau-barbizon-250320-03.jpg': restau250320_03,
  'restaurant-hotel-bas-breau-barbizon-250320-04.jpg': restau250320_04,
  'restaurant-hotel-bas-breau-barbizon-250320-05.jpg': restau250320_05,
  'restaurant-hotel-bas-breau-barbizon-250320-06.jpg': restau250320_06,
  'restaurant-hotel-bas-breau-barbizon-250320-07.jpg': restau250320_07,
  'restaurant-hotel-bas-breau-barbizon-250320-08.jpg': restau250320_08
};