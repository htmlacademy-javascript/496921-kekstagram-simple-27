import {getRandomPositiveInteger} from './util.js';

const PHOTO_DESCRIPTIONS = [
  'На вечеринке с друзьями',
  'Мой кот и я',
  'Байкал. Вечер.',
  'Наконец-то отпуск!',
  'А вы занимаетесь пилатесом?',
  'Жму руку Гению',
  'Моя ласточка'
];
const PHOTO_COUNT = 25;

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: PHOTO_DESCRIPTIONS[getRandomPositiveInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const getPhotos = () => Array.from({length: PHOTO_COUNT}, (_item, index) => createPhoto(index + 1));

export {getPhotos};
