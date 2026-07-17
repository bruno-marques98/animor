const swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});

GLightbox({
    selector: '.glightbox'
});

const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".testimonial-pagination",
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        }
    }
});

/*=========================
BOTÃO TOPO
=========================*/
const topButton = document.getElementById("topButton");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});