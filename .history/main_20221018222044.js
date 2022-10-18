// navgation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavgation = document.querySelector(".primary-navigation");
primaryNavgation.addEventListener("click", () => {
  primaryNavgation.classList.toggle("opened");
});
