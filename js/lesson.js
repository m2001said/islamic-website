const fakeData = [
  {
    name: "شرح درس الصلاة 1",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "paray",
  },
  {
    name: "شرح درس الصلاة 2",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "paray",
  },
  {
    name: "شرح درس الصلاة 3",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "paray",
  },
  {
    name: "شرح درس الصلاة 4",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "paray",
  },
  {
    name: "شرح درس الزكاة 1",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "money",
  },
  {
    name: "شرح درس الزكاة 2",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "money",
  },
  {
    name: "شرح درس الزكاة 3",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "money",
  },
  {
    name: "شرح درس الزكاة 4",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "money",
  },
  {
    name: "شرح درس الصوم 1",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "fasting",
  },
  {
    name: "شرح درس الصوم 2",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "fasting",
  },
  {
    name: "شرح درس الصوم 3",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "fasting",
  },
  {
    name: "شرح درس الصوم 4",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "fasting",
  },
  {
    name: "شرح درس الحج 1",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "haj",
  },
  {
    name: "شرح درس الحج 2",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "haj",
  },
  {
    name: "شرح درس الحج 3",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "haj",
  },
  {
    name: "شرح درس الحج 4",
    data: "23-2-2023",
    numbers: "43",
    image: "/images/book1.jpg",
    link: "https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3",
    category: "haj",
  },
];

const sectionCenter = document.querySelector(".lesson-data-container");
const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(fakeData);
});

filterBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = fakeData.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem.name;
      }
    });

    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return ` 
    <div class=" card flex-column div-raduis "> 
    <h4 class="card-content-title">${item.name}</h4>
   
    <audio controls src="/assests/musiqe.mp3" type="audio/mpeg"></audio>
    <div class="card-content-bottom flex">
      <div class="card-content-info flex">
        <p>34 درس</p>
        <p>31-1-1433</p>
      </div>
      <div class="social flex">
        <!-- you should put dynamic link like this  https://www.facebook.com/share.php?u=    &{link} -->
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3"
        >
          <i class="bi bi-facebook"></i>
        </a>
        <a
          target="_blank"
          href="https://t.me/share/url?url=https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3"
        >
          <i class="bi bi-telegram"></i>
        </a>
        <a
          target="_blank"
          href="http://twitter.com/share?&url=https://drosuae.com/Download/shk_3azez_far7an/radio%26tv/sareatu_al_nur/2023_1_29_793.mp3"
        >
          <i class="bi bi-twitter"></i>
        </a>
      </div>
    </div>
    </div>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
