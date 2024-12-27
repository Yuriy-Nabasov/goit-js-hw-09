`use strict`; // Код у суворому режимі

// console.log(`Gallery`);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//! 3 - Розмітка елементів галереї
// В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення.
// Для атрибута alt використовуємо опис зображення.
// Посилання на велике зображення повинно зберігатися в data-атрибуті source на елементі <img>,
// і вказуватися в href посилання.

const createImageCardTemplate = card => `
  <li class="gallery-item">
    <a class="gallery-link" href="${card.original}">
      <img
        class="gallery-image js-gallery-image"
        src="${card.preview}"
        data-source="${card.original}"
        alt="${card.description}"
      />
    </a>
  </li>
`;

const imageCardTemplate = images.map(createImageCardTemplate).join(``);

//! 3.1 - Додавання розмітки в html файл за одну операцію

const imageListEl = document.querySelector(`.js-gallery`);
imageListEl.innerHTML = imageCardTemplate;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Включити підписи
  captionsData: 'alt', // Джерело підпису: атрибут alt
  captionDelay: 250, // Затримка перед відображенням підпису
  animationSpeed: 300, // Швидкість анімації
  overlayOpacity: 0.8, // Прозорість фону
});
