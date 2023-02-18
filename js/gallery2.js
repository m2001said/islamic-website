// // Add a click event listener to each gallery item
// const galleryItems = document.querySelectorAll("#gallery a");
// galleryItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     const type = item.getAttribute("data-type");
//     const href = item.getAttribute("href");
//     if (type === "pdf") {
//       // Display PDF in a new window
//       window.open(href, "_blank");
//     } else {
//       // Display image in Lightbox
//       lightbox.option({
//         fadeDuration: 200,
//         imageFadeDuration: 200,
//         wrapAround: true,
//         fitImagesInViewport: true,
//         maxWidth: window.innerWidth * 0.8,
//         maxHeight: window.innerHeight * 0.8,
//       });
//       lightbox.init();
//       lightbox.open(href);
//     }
//   });
// });
