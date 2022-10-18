// navgation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavgation = document.querySelector(".primary-navigation");
navToggle.addEventListener("click", () => {
  primaryNavgation.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
  primaryNavgation.toggleAttribute("data-visible");
});
