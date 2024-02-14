document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slide');

    let counter = 1;

    setInterval(() => {
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;

        counter++;

        // Reset to the first slide after the last one
        if (counter === carouselSlide.children.length) {
            setTimeout(() => {
                carouselSlide.style.transition = 'none';
                counter = 1;
                carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
            }, 1000);
        }
    }, 3000);

    document.getElementById('nextBtn').addEventListener('click', function () {
        if (counter < carouselSlide.children.length - 1) {
            counter++;
        } else {
            counter = 1;
        }
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        if (counter > 1) {
            counter--;
        } else {
            counter = carouselSlide.children.length - 1;
        }
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    });
});
