import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Використовуємо lodash.throttle для оновлення часу не частіше 1 разу на секунду
const updateLocalStorage = throttle(function(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000);

player.on('timeupdate', updateLocalStorage);

// Встановлюємо значення з localStorage
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
