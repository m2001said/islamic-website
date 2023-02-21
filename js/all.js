const icon = document.querySelector(".bi-search");
const iconBox = document.querySelector(".icon");
const inputBox = document.querySelector("input[type='text']");
icon.addEventListener("click", () => {
  iconBox.classList.toggle("active");
  inputBox.classList.toggle("active");
});

// -------sharing---------
const shareBtns = document.querySelectorAll(".card-share-btn");

shareBtns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    // Get the audio element that comes right before the button
    const audio = e.target.parentElement.parentElement.querySelector("audio");
    console.log(audio);
    // Get the src of the audio element
    const audioSrc = audio.getAttribute("src");
    try {
      await navigator.share({
        title: "موقع الشيخ عبدالله",
        text: "لقد أعجبني هذا الدرس فلعله ينفعكم ",
        url: audioSrc,
      });
    } catch {
      console.log("error in sharing");
    }
  });
});
