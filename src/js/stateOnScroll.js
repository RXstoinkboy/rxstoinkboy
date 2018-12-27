export function stateOnScroll() {
  const titles = document.querySelectorAll('.title');
  const projects = document.querySelectorAll('.project');
  const about = document.querySelector('.about__container');
  const aboutEls = about.querySelectorAll('.about__element');

  titles.forEach((title) => {
    // half way through the item
    const itemMidY = (window.scrollY + window.innerHeight) - title.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = title.offsetTop + title.getBoundingClientRect().height;
    const isHalfShown = itemMidY > title.offsetTop;
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

  projects.forEach((project) => {
    const itemMidY = (window.scrollY + window.innerHeight) - project.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = project.offsetTop + project.getBoundingClientRect().height;
    const isHalfShown = itemMidY > project.offsetTop;
    const notScrolledPast = window.scrollY < itemBottom;
    // logic
    if (isHalfShown && notScrolledPast) {
      project.classList.add('project--active');
    }
  });


  aboutEls.forEach((aboutItem) => {
    const itemMidY = (window.scrollY + window.innerHeight) - aboutItem.getBoundingClientRect().height / 2;
    // bottom of the item
    const itemBottom = aboutItem.offsetTop + aboutItem.getBoundingClientRect().height;
    const isHalfShown = itemMidY > aboutItem.offsetTop;
    const notScrolledPast = window.scrollY < itemBottom;
    // logic
    if (isHalfShown && notScrolledPast) {
      aboutItem.classList.add('about__element--active');
    }
  });
}
