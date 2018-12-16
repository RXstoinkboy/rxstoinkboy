const mobileMenu = document.querySelector('.bars');
const bars = mobileMenu.querySelectorAll('span');

function toggleMobileMenu() {
  console.log(bars);
  for (let i = 0; i <= 2; i++) {
    bars[i].classList.toggle(`bars__bar--${i}-active`);
  }
}

mobileMenu.addEventListener('click', toggleMobileMenu);
