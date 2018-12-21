import { scrollBack } from './scrollToTop.js';
import { pageDown } from './pageDown.js';
// DOM elements

const mobileMenuButton = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobileMenu');
const backButton = document.querySelector('.back-button');
const helloButton = document.querySelector('.button');
const nav = document.querySelector('.nav');

// display menu

function navState() {
  const navPosition = {};
  navPosition.initial = nav.offsetTop;

  console.log(navPosition.initial);
  if (window.scrollY >= nav.offsetTop) {
    nav.classList.add('nav--active');
  } else if (window.scrollY <= navInitPosition) {
    nav.classList.remove('nav--active');
  }
}


// FUNCTIONS

// mobile menu open/close
function toggleMenu() {
  mobileMenuButton.classList.toggle('mobile-button--active');
  mobileMenu.classList.toggle('mobileMenu--active');
}

// toggle disply/hide of back button

function displayBackButton() {
  if (window.scrollY >= window.innerHeight) {
    backButton.style.display = 'flex';
    backButton.style.opacity = '1';
  } else {
    backButton.style.display = 'none';
    backButton.style.opacity = '0';
  }
}

// event listeners
mobileMenuButton.addEventListener('click', toggleMenu);
backButton.addEventListener('click', scrollBack);
window.addEventListener('scroll', displayBackButton);
window.addEventListener('scroll', navState);
helloButton.addEventListener('click', pageDown);
