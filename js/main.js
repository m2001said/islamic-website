// -----navbar for mobile ------------

// let navButton = document.querySelector(".nav-button");

// navButton.onclick = () => {
//   navList = document.querySelector(".nav-list");
//   navList.classList.toggle("active");
//   navButton.classList.toggle("active");
// };

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

setInterval(changeHero, 4000);

// -----------------sharing links of social media----------
// sharing facebook
// document.querySelector(".facebook").addEventListener("click", (e) => {
//   e.preventDefault();
//   var url = this.href;
//   var shareUrl =
//     "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
//   window.open(shareUrl, "Share on Facebook", "height=320,width=640");
// });

// const sharingLink = encodeURI(window.location.href);

// const socialMessage = encodeURIComponent(
//   "السلام عليكم ورحمة الله وبركاته ، وجدت هذا لعله ينفعك ان شاء الله"
// );

// const pageTitle = encodeURIComponent(
//   document.querySelector("title").textContent
// );

// // sharing facebook
// const facebook = document.querySelector(".facebook");
// facebook.href = `https://www.facebook.com/share.php?u=${sharingLink}`;

// const twitter = document.querySelector(".twitter");
// twitter.href = `http://twitter.com/share?&url=${sharingLink}&text=${socialMessage}&hashtags=javascript,programming`;

// -----------------swiper----------

const swiperHandler = (paginationElement, buttonNext, buttonPrev) => {
  return {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: paginationElement,
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  };
};
// for lessons
var swiper = new Swiper(
  ".slide-content",
  swiperHandler(
    ".swiper-pagination",
    ".lessons-button-next",
    ".lessons-button-prev"
  )
);

//fon new lessons
var swiper = new Swiper(
  ".slide-content-new-lessons",
  swiperHandler(
    ".swiper-pagination-new-lessons",
    ".new-lessons-button-next",
    ".new-lessons-button-prev"
  )
);

//fon new lectures
var swiper = new Swiper(
  ".slide-content-lectures",
  swiperHandler(
    ".swiper-pagination-lectures",
    ".lectures-button-next",
    ".lectures-button-prev"
  )
);

//fon new lectures
var swiper = new Swiper(
  ".slide-content-new-lectures",
  swiperHandler(
    ".swiper-pagination-new-lectures",
    ".new-lectures-button-next",
    ".new-lectures-button-prev"
  )
);
//fon new speech
var swiper = new Swiper(
  ".slide-content-speech",
  swiperHandler(
    ".swiper-pagination-speech",
    ".speech-button-next",
    ".speech-button-prev"
  )
);

// -------gallery-------------------------
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 2,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
// -------scrolling animation---------------
const boxRight = document.querySelectorAll(".scroll-right");
const boxLeft = document.querySelectorAll(".scroll-left");

window.addEventListener("scroll", checkRightBox);
window.addEventListener("scroll", checkLeftBox);

// for checking top of element
function checkTop(element) {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const boxTop = element.getBoundingClientRect().top;
  if (boxTop < triggerBottom) {
    element.classList.add("show");
  } else {
    element.classList.remove("show");
  }
}

function checkRightBox() {
  boxLeft.forEach((box) => {
    checkTop(box);
  });
}
function checkLeftBox() {
  boxRight.forEach((box) => {
    checkTop(box);
  });
}

// -----------smooth scrolling------------
// let navLinks = document.querySelectorAll("nav a");

// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     let currentId = e.target.attributes.href.value;
//     let section = document.querySelector(currentId);
//     let sectionPosition = section.offsetTop;
//     window.scroll({
//       top: sectionPosition,
//       behavior: "smooth",
//     });
//   });
// });

// -----------loading ------------
window.onload = function () {
  let loader = document.querySelector(".loader");

  loader.style.display = "none";
};
