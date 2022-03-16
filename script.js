const header = document.querySelector("header");
const button = document.querySelector("#backToTop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("bg-green");
    button.style.display = "block";
  } else {
    header.classList.remove("bg-green");
    button.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
    console.log("responsive added");
  }
};

button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
