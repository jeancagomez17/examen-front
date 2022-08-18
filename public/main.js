import * as temProduct from './components/product/main.js';
import * as temCarrousel from './components/caruosel/main.js';
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");



hamburger.addEventListener("click", mobileMenu)
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const app =  document.querySelector("#app");
const app2 =  document.querySelector("#app2");

temCarrousel.render(app);
temProduct.render(app2);






