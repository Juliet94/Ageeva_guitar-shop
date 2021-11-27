import {getRandomInteger} from './utils';

import electricGuitar from './assets/images/electric-guitar.jpg';
import acousticGuitar from './assets/images/acoustic-guitar.jpg';
import ukulele from './assets/images/ukulele.jpg';

const MIN_RATE = 0;
const MAX_RATE = 5;

export const guitars = [
  {
    id: 1,
    vendorCode: 'SO757575',
    name: 'Честер Bass',
    type: 'Электрогитара',
    popularity: 15,
    strings: 7,
    price: 17500,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 2,
    vendorCode: 'TK129049',
    name: 'СURT Z300',
    type: 'Электрогитара',
    popularity: 9,
    strings: 7,
    price: 29500,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 3,
    vendorCode: 'RO111111',
    name: 'Roman LX',
    type: 'Укулеле',
    popularity: 21,
    strings: 4,
    price: 6800,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 4,
    vendorCode: 'TK436457',
    name: 'СURT T300',
    type: 'Электрогитара',
    popularity: 15,
    strings: 6,
    price: 30000,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 5,
    vendorCode: 'DI192138',
    name: 'Dania Super',
    type: 'Акустическая гитара',
    popularity: 5,
    strings: 7,
    price: 3500,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 6,
    vendorCode: 'SO934345',
    name: 'Честер WX',
    type: 'Электрогитара',
    popularity: 17,
    strings: 6,
    price: 15300,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 7,
    vendorCode: 'DI082347',
    name: 'Dania VX',
    type: 'Укулеле',
    popularity: 5,
    strings: 4,
    price: 2200,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 8,
    vendorCode: 'SO135646',
    name: 'Честер Plus ',
    type: 'Электрогитара',
    popularity: 27,
    strings: 4,
    price: 30000,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 9,
    vendorCode: 'VO154751',
    name: 'Виолана 300',
    type: 'Акустическая гитара',
    popularity: 3,
    strings: 7,
    price: 1700,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 10,
    vendorCode: 'TK244556',
    name: 'СURT Clasic',
    type: 'Электрогитара',
    popularity: 20,
    strings: 4,
    price: 23000,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 11,
    vendorCode: 'TK134663',
    name: 'СURT Z250',
    type: 'Электрогитара',
    popularity: 19,
    strings: 4,
    price: 18700,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 12,
    vendorCode: 'SO123212',
    name: 'Честер 7X',
    type: 'Электрогитара',
    popularity: 30,
    strings: 7,
    price: 35000,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 13,
    vendorCode: 'SO123234',
    name: 'Честер 6V',
    type: 'Электрогитара',
    popularity: 28,
    strings: 6,
    price: 14900,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: electricGuitar,
  },
  {
    id: 14,
    vendorCode: 'VO519510',
    name: 'Виолана Mix',
    type: 'Акустическая гитара',
    popularity: 7,
    strings: 6,
    price: 7600,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 15,
    vendorCode: 'VO457369',
    name: 'Виолана 250x',
    type: 'Акустическая гитара',
    popularity: 19,
    strings: 6,
    price: 6500,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 16,
    vendorCode: 'FB625903',
    name: 'Фабио Лайт',
    type: 'Акустическая гитара',
    popularity: 26,
    strings: 7,
    price: 12000,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 17,
    vendorCode: 'FB576948',
    name: 'Фабио L100',
    type: 'Акустическая гитара',
    popularity: 31,
    strings: 7,
    price: 9900,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 18,
    vendorCode: 'LU012032',
    name: 'Liana Z200',
    type: 'Акустическая гитара',
    popularity: 28,
    strings: 12,
    price: 8900,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 19,
    vendorCode: 'LU546853',
    name: 'Liana Z100',
    type: 'Акустическая гитара',
    popularity: 34,
    strings: 12,
    price: 10500,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 20,
    vendorCode: 'LU458283',
    name: 'Liana Z300',
    type: 'Акустическая гитара',
    popularity: 9,
    strings: 6,
    price: 13300,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: acousticGuitar,
  },
  {
    id: 21,
    vendorCode: 'RO324341',
    name: 'Roman RX',
    type: 'Укулеле',
    popularity: 37,
    strings: 4,
    price: 4800,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 22,
    vendorCode: 'RO214235',
    name: 'Roman TX',
    type: 'Укулеле',
    popularity: 5,
    strings: 4,
    price: 1900,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 23,
    vendorCode: 'DI132414',
    name: 'Dania U100',
    type: 'Укулеле',
    popularity: 23,
    strings: 4,
    price: 2500,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 24,
    vendorCode: 'DI934754',
    name: 'Dania WR',
    type: 'Укулеле',
    popularity: 3,
    strings: 4,
    price: 3800,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 25,
    vendorCode: 'DI034292',
    name: 'Dania LE',
    type: 'Укулеле',
    popularity: 10,
    strings: 4,
    price: 4100,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 26,
    vendorCode: 'MI193214',
    name: 'Mirana V10',
    type: 'Укулеле',
    popularity: 14,
    strings: 4,
    price: 2700,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
  {
    id: 27,
    vendorCode: 'VO043244',
    name: 'Виолана Mini',
    type: 'Укулеле',
    popularity: 29,
    strings: 4,
    price: 6700,
    rating: getRandomInteger(MIN_RATE, MAX_RATE),
    img: ukulele,
  },
];
