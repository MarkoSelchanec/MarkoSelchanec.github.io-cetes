import { cardCreate, createCardArray, splitArray } from './service.js';

class phone {
  constructor(img, name, price) {
    this.img = img;
    this.name = name;
    this.price = price;
  }
}

const xiaomi = new phone(
  'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-9-0.jpg',
  'Xiaomi Redmi 9 Prime',
  `400`
);

export let phones = [
  xiaomi,
  xiaomi,
  xiaomi,
  xiaomi,
  xiaomi,
  xiaomi,
  xiaomi,
  xiaomi,
  xiaomi,
];

// let phonesFullCards = [];

// createCardArray(phonesData, cardCreate, phonesFullCards);

// export let phones = splitArray(phonesFullCards);
