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

const getRandomPositiveInteger = (a = 0, b = 1000) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkStringLength = (str = 'Мяу', maxLength = 100) => str.length <= maxLength;
checkStringLength('bar', 150);

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: PHOTO_DESCRIPTIONS[getRandomPositiveInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const getPhotos = () => Array.from({length: PHOTO_COUNT}, (_item, index) => createPhoto(index + 1));

getPhotos();

