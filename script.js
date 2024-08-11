function startCarousel(carouselId, interval) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = index % slides.length;
        const offset = -currentIndex * 100;
        carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, interval); // Cambia de imagen cada intervalo (en milisegundos)

    // Inicializa el carrusel mostrando la primera imagen
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', function () {
    const interval = 3000; // Cambia la imagen cada 3 segundos
    startCarousel('carousel1', interval);
    startCarousel('carousel2', interval);
    startCarousel('carousel3', interval);
});
