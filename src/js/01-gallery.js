// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

// Функція для створення розмітки елемента галереї
function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}">
      </a>
    </li>
  `;
}

// Функція для рендерингу галереї
function renderGallery() {
  const galleryList = document.querySelector('.gallery');

  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
}

// Рендеримо галерею при завантаженні сторінки
renderGallery();

// Використовуэмо бібліотеку галереї
new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
});
