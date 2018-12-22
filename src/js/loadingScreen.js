export function endLoading() {
  // DOM elements
  const body = document.querySelector('body');
  const loader = document.querySelector('.loading-screen');
  const header = document.querySelectorAll('.hello__intro');
  const button = document.querySelector('.button');

  body.classList.remove('loading');

  const removeLoader = () => {
    if (loader.style.backgroundColor == 0) {
      loader.style.display = 'none';
      header.forEach(el => el.classList.add('hello__intro--active'));
      setTimeout(() => button.classList.add('button--active'), 700);
    }
  };

  loader.addEventListener('transitionend', removeLoader);
}
