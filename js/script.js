// Toggle class active
const navbarNAV = document.querySelector(".navbar-nav");

//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNAV.classList.toggle("active");
};

// Klik di luar sidebar untuk hilangin nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNAV.contains(e.target)) {
    navbarNAV.classList.remove("active");
  }
});
