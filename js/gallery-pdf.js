// ----for 2 btns on the top of the page
// const btn1 = document.querySelector(".gallery-btn-1");
// const btn2 = document.querySelector(".gallery-btn-2");

// const box1 = document.querySelector("#gallery-box-1");
// const box2 = document.querySelector("#gallery-box-2");

// btn1.addEventListener("click", () => {
//   btn2.classList.remove("active");
//   btn1.classList.add("active");
//   box2.style.display = "none";
//   box1.style.display = "flex";
// });

// btn2.addEventListener("click", () => {
//   btn1.classList.remove("active");
//   btn2.classList.add("active");
//   box1.style.display = "none";
//   box2.style.display = "flex";
// });

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

    // sharing
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
