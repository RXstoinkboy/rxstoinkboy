// import { toggleMobileMenu } from './mobile-menu.mjs';

const mobileMenu = document.querySelector('.bars');

function toggleMobileMenu() {
  console.log(this, 'działa');
  mobileMenu.classList.toggle('bars--active');
}

mobileMenu.addEventListener('click', toggleMobileMenu);
