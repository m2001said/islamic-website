const icon = document.querySelector(".bi-search");
const iconBox = document.querySelector(".icon");
const inputBox = document.querySelector("input[type='text']");
icon.addEventListener("click", () => {
  iconBox.classList.toggle("active");
  inputBox.classList.toggle("active");
});
