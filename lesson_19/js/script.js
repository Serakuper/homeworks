"use strict";

document.addEventListener('click', documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('.icon-menu')) {
      document.documentElement.toggleAttribute('data-menu-open');
   }
}

const header = document.querySelector(".header");
let ticking = false;

window.addEventListener("scroll", () => {
   if (!ticking) {
      window.requestAnimationFrame(() => {
         header.classList.toggle("header--scroll-state", window.scrollY > 0);
         ticking = false;
      });
      ticking = true;
   }
});