// navgation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavgation = document.querySelector(".primary-navigation");
navToggle.addEventListener("click", () => {
  primaryNavgation.toggleAttribute("data-visible");
});
