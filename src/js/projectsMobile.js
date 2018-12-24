export function handleMobile() {
  const details = document.querySelector('.details');
  const close = details.querySelector('.details__close');

  details.style.display = 'block';

  close.addEventListener('click', () => {
    details.style.display = 'none';
  });
}
