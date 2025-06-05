const hamburger = document.querySelector("#hamburger-menu-icon");
const nav = document.querySelector("nav");
const closer = document.querySelector("#close-menu-icon");

hamburger.addEventListener("click", () => {
  nav.style.display = "flex";
  hamburger.style.display = "none";
  closer.style.display = "block";
});

closer.addEventListener("click", () => {
  hamburger.style.display = "flex";
  nav.style.display = "none";
  closer.style.display = "none";
});
