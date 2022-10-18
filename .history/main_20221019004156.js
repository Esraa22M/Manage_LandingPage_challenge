// navgation
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavgation = document.querySelector(".primary-navigation");
navToggle.addEventListener("click", () => {
  primaryNavgation.hasAttribute("data-visible")
    ? primaryNavgation.setAttribute("aria-expanded", false)
    : primaryNavgation.setAttribute("aria-expanded", true);
  primaryNavgation.toggleAttribute("data-visible");
});
