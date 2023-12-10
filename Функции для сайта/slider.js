// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
// Устанавливаем текущий индекс слайда
var currentSlide = 0;

// Запускаем автоматическое переключение слайдов через каждые 3 секунды
setInterval(function() {
  // Скрываем текущий слайд
  slides[currentSlide].style.display = "none";

  // Увеличиваем текущий индекс слайда
  currentSlide++;

  // Если достигнут конец слайдов, переключаемся на первый слайд
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Отображаем новый текущий слайд
  slides[currentSlide].style.display = "block";
}, 3000);

// Инициализация слайдера
updateSlider();