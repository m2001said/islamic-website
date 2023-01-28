// -----navbar for mobile ------------

let navButton = document.querySelector(".nav-button");

navButton.onclick = () => {
  navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
  navButton.classList.toggle("active");
};

// -------background of hero section---------
const changeHero = () => {
  const images = [
    'url("/images/hero-section1.jpg")',
    'url("/images/hero-section2.jpg")',
    'url("/images/hero-section3.jpg")',
  ];

  const heroSection = document.querySelector(".hero-background");
  const bg = images[Math.floor(Math.random() * images.length)];
  heroSection.style.backgroundImage = bg;
};

setInterval(changeHero, 3000);

// -----------------swiper----------
var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});
var swiper = new Swiper(".slide-content2", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});

// const swiperHandler = () => {
//   return {
//     slidesPerView: 2,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: "true",
//     fade: "true",
//     grabCursor: "true",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       // dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       700: {
//         slidesPerView: 2,
//       },
//     },
//   };
// };
// var swiper = new Swiper(".slide-content", swiperHandler());
// var swiper = new Swiper(".slide-content", swiperHandler());
