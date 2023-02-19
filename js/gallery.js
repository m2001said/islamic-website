// ----for 2 btns on the top of the page
const btn1 = document.querySelector(".gallery-btn-1");
const btn2 = document.querySelector(".gallery-btn-2");

const box1 = document.querySelector("#gallery-box-1");
const box2 = document.querySelector("#gallery-box-2");

btn1.addEventListener("click", () => {
  btn2.classList.remove("active");
  btn1.classList.add("active");
  box2.style.display = "none";
  box1.style.display = "flex";
});

btn2.addEventListener("click", () => {
  btn1.classList.remove("active");
  btn2.classList.add("active");
  box1.style.display = "none";
  box2.style.display = "flex";
});

// -------------for gallery of images
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("bi", "bi-chevron-double-left", "lightbox-prev");
lightBoxNext.classList.add("bi", "bi-chevron-double-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
  showLightBox((index += n));
}
function prevImage() {
  slideImage(-1);
}
function nextImage() {
  slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);

// ---------------for pdf
const pdfOverlay = document.getElementById("pdf-overlay");
const pdfViewer = document.getElementById("pdf-viewer");
const pdfCloseBtn = document.getElementById("pdf-close-btn");
const pdfShare = document.getElementById("pdf-share");

const pdfThumbnails = document.getElementsByClassName("gallery-pdf");

for (let i = 0; i < pdfThumbnails.length; i++) {
  const pdfThumbnail = pdfThumbnails[i];
  pdfThumbnail.addEventListener("click", function (event) {
    event.preventDefault();
    const pdfUrl = pdfThumbnail.getAttribute("href");
    pdfViewer.setAttribute("src", pdfUrl);
    pdfOverlay.style.display = "block";
    pdfShare.addEventListener("click", async () => {
      try {
        await navigator.share({
          title: "موقع الشيخ عبدالله",
          text: "لقد أعجبني هذا الدرس فلعله ينفعكم ",
          url: window.location.href + pdfUrl,
        });
      } catch {
        console.log("error in sharing");
      }
    });
  });
}

pdfCloseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  pdfOverlay.style.display = "none";
});
// ---------
