
let thumbnails = document.querySelectorAll('.thumbnail');
let previewImage = document.getElementById('previewImage');

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        previewImage.src = thumbnail.src;
    });
});

let form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Пожалуйста, заполните все поля');
        event.preventDefault(); // Отменяем отправку формы
    }
});

// Получаем все изображения с классом 'gallery-image'
const images = document.querySelectorAll('.gallery-image');

// Для каждого изображения добавляем обработчик события 'click'
images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Получаем название анимации из атрибута 'data-animation'
        const animationName = image.getAttribute('data-animation');

        // Удаляем предыдущие классы анимации, если они есть
        image.classList.remove('animate__animated');
        image.classList.remove(`animate__${animationName}`);

        // Принудительно перерисовываем элемент для повторной анимации
        void image.offsetWidth;

        // Добавляем необходимые классы для запуска анимации
        image.classList.add('animate__animated', `animate__${animationName}`);

        // Удаляем классы после завершения анимации
        image.addEventListener('animationend', function() {
            image.classList.remove('animate__animated', `animate__${animationName}`);
        }, { once: true });
    });
});


