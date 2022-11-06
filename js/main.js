const PHOTO_COUNT = 25;
const PHOTO_DESCRIPTIONS = [
  'На вечеринке с друзьями',
  'Мой кот и я',
  'Байкал. Вечер.',
  'Наконец-то отпуск!',
  'А вы занимаетесь пилатесом?',
  'Жму руку Гению',
  'Моя ласточка'
];

const photoData = [];

const getRandomInt = (min = 0, max = 1000) => {
  if (min < 0 || max <= min) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkStringMaxLength = (str = 'foo', maxLength = 100) => str.length <= maxLength;

const createPhotoItem = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: PHOTO_DESCRIPTIONS[getRandomInt(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200)
});

const createPhotoData = () => {
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photoData.push(createPhotoItem(i));
  }
};

createPhotoData();
checkStringMaxLength('bar', 150);
