export function stateOnScroll(e) {
  const title = document.querySelectorAll('.title');
  console.log(window);

  const position = {};
  position.whereScrolled = window.scrollY;
  title.forEach((item) => {
    position.topOfItem = item.offsetTop;
  });
  console.log({ position });
}
