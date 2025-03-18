document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".first-slide, .second-slide, .third-slide, .fourth-slide");
    const nextBtn = document.querySelector(".next-slide");
    const backBtn = document.querySelector(".back-btn");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    backBtn.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Показать первый слайд при загрузке страницы
    showSlide(currentSlide);
});

