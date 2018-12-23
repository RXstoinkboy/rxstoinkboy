export function stateOnScroll() {
  const titles = document.querySelectorAll('.title');
  const projects = document.querySelectorAll('.container__project');

  titles.forEach((title) => {
    // half way through the item
    const itemMidY = (window.scrollY + window.innerHeight) - title.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = title.offsetTop + title.getBoundingClientRect().height;
    const isHalfShown = itemMidY > itemBottom;
    const notScrolledPast = window.scrollY < itemBottom;

    // logic
    if (isHalfShown && notScrolledPast) {
      title.classList.add('title--active');
    }
    // add only if item should be hidden after being scrolled past
    // else {
    //   title.classList.remove('title--active');
    // }


  });
}
