// navgation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavgation = document.querySelector(".primary-navigation");
navToggle.addEventListener("click", () => {
  let flag = primaryNavgation.hasAttribute("data-visible") ? true : false;
  console.log(flag);
  primaryNavgation.toggleAttribute("data-visible");
});
