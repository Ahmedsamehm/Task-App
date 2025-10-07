const mobileIcon = document.getElementById("mobile_icon");
const mobileMenu = document.getElementById("mobile_menu");

mobileIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("invisible");
});
