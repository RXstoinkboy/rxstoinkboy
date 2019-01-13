export function handleMobile(e) {
  const details = document.querySelector('.details');
  const close = details.querySelector('.details__close');
  const detailsImg = details.querySelector('.details__min-img');
  const detailsInfo = details.querySelector('.details__info');
  const detailsLink = details.querySelector('.datails__git');

  // update with new projects info
  const pictures = {
    project1: './dist/images/Queen-tribute-page.png',
    project2: './dist/images/survey-form.png',
    project3: './dist/images/background3-mod.jpg',
    project4: './dist/images/background3-mod.jpg',
    project5: './dist/images/background3-mod.jpg',
    project6: './dist/images/background3-mod.jpg',
  };

  // update with new projects info
  const texts = {
    project1: 'This is a tribute page about Queen band. I prepared it as an exercise for FCC certification in Responsive Web Design. It was prepared with pure ES6 and SASS for styling. It is a quite simple desing but I tried to make it a bit more attractive.',
    project2: 'This project is my approach to make a solid survey-form example with solid semantics and custom form validation with JS used. In the future there might be additional backend script added to handle data got from the form. Besides that, all functionality is fully prepared. Form is prepared with CSS grid usage. I also added custom feel and look to inputs.',
    project3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
    project4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
    project5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
    project6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime dolor ex, debitis reiciendis impedit cupiditate natus? Dolorem, accusamus sint quisquam dicta, accusantium labore provident alias natus deserunt quia facere nisi iusto? Aperiam odit, similique adipisci assumenda dignissimos iusto, tempora dolorum debitis excepturi ad at, a voluptatibus. Laborum, accusamus repellat.',
  };

  // update with new projects info
  const links = {
    project1: 'https://github.com/RXstoinkboy/Tribute-page',
    project2: 'https://github.com/RXstoinkboy/survey-form',
    project3: 'https://github.com/RXstoinkboy/Tribute-page',
    project4: 'https://github.com/RXstoinkboy/Tribute-page',
    project5: 'https://github.com/RXstoinkboy/Tribute-page',
    project6: 'https://github.com/RXstoinkboy/Tribute-page',
  };

  details.style.display = 'block';
  detailsImg.src = `${pictures[e.target.dataset.project]}`;
  detailsInfo.innerText = `${texts[e.target.dataset.project]}`;
  detailsLink.href = `${links[e.target.dataset.project]}`;

  close.addEventListener('click', () => {
    details.style.display = 'none';
  });
}
