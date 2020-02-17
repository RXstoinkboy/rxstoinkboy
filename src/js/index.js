import { scrollBack } from './scrollToTop.js';
import { pageDown } from './pageDown.js';
import { skipToSection } from './skipToSection.js';
import { endLoading } from './loadingScreen.js';
import { stateOnScroll } from './stateOnScroll.js';
import { handleMobile } from './projectsMobile.js';

window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const mobileMenuButton = document.querySelector('.mobile-button');
  const mobileMenu = document.querySelector('.mobileMenu');
  const backButton = document.querySelector('.back-button');
  const helloButton = document.querySelector('.button');
  const nav = document.querySelector('.nav');
  const navList = document.querySelectorAll('.menu__item');
  const mobileNav = document.querySelectorAll('.list__item');
  const projectWatch = document.querySelectorAll('.project__watch');

  // display menu

  function navState() {
    const navPosition = {};
    navPosition.initial = nav.offsetTop;
    if (window.scrollY >= nav.offsetTop) {
      nav.classList.add('nav--active');
    }
    if (window.scrollY <= window.innerHeight) {
      nav.classList.remove('nav--active');
    }
  }

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
  
  function getYear(){
    const footer = document.querySelector('.footer');
    
    const now = new Date().getFullYear();
    
    footer.innerText = `&copy; ${now}`;
  }
  
  getYear();

  // event listeners
  mobileMenuButton.addEventListener('click', toggleMenu);
  backButton.addEventListener('click', scrollBack);
  window.addEventListener('scroll', _.debounce(displayBackButton, 50));
  window.addEventListener('scroll', _.debounce(navState, 10));
  window.addEventListener('scroll', _.debounce(stateOnScroll, 20));
  helloButton.addEventListener('click', pageDown);
  navList.forEach(item => item.addEventListener('click', skipToSection));
  mobileNav.forEach(item => item.addEventListener('click', skipToSection));
  window.addEventListener('load', endLoading);
  projectWatch.forEach(item => item.addEventListener('click', handleMobile));
});
