// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


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
    
    // Використовуэмо бібліотеку галереї
    new SimpleLightbox('.gallery a');
}

// Рендеримо галерею при завантаженні сторінки
window.addEventListener('DOMContentLoaded', renderGallery);

// Додаємо обробник події на ul.gallery для делегування кліків на елементи галереї
document.querySelector('.gallery').addEventListener('click', onGalleryItemClick);

// Функція для обробки кліку на елемент галереї
function onGalleryItemClick(event) {
  event.preventDefault();

  // Перевіряємо, чи був клік на зображенні
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // Отримуємо посилання на велике зображення
  const largeImageURL = event.target.parentNode.getAttribute('href');

  // Відкриваємо модальне вікно з великим зображенням
  const instance = basicLightbox.create(`<img src="${largeImageURL}" width="800" height="600">`);
  instance.show();
}
