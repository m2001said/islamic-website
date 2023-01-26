// var mainListDiv = document.querySelector(".nav-mobile-links"),
//   navButton = document.querySelector(".nav-button");

// navButton.onclick = function () {
//   "use strict";

//   mainListDiv.classList.toggle("show_list");
//   mediaButton.classList.toggle("active");
// };

let navButton = document.querySelector(".nav-button");

navButton.onclick = () => {
  navList = document.querySelector(".nav-list");
  navList.classList.toggle("active");
  navButton.classList.toggle("active");
};
