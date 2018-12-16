export function toggleMobileMenu() {
  const bars = this.querySelectorAll('span');

  function toggleMenu() {
    console.log(bars);
    for (let i = 0; i <= 2; i++) {
      bars[i].classList.toggle(`bars__bar--${i}-active`);
    }
  }
}
