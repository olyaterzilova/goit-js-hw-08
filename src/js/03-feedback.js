const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

// Функція для оновлення локального сховища
function updateLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Застосовуємо lodash.throttle до функції оновлення сховища, обмежуючи частоту виклику до 500 мілісекунд
const throttledUpdateLocalStorage = throttle(updateLocalStorage, 500);

// Додаємо обробник події input на кожне поле форми
feedbackForm.addEventListener('input', throttledUpdateLocalStorage);


// Перевіряємо стан сховища під час завантаження сторінки та заповнюємо поля форми
window.addEventListener('load', function () {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});


// Обробник події сабміту форми
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Очищуємо сховище
  localStorage.removeItem('feedback-form-state');
  
    // Виводимо дані форми у консоль
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);

  // Очищуємо поля форми
  emailInput.value = '';
  messageInput.value = '';
});