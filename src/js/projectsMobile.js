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
    project3: './dist/images/bikeLandingPage2.png',
    project4: './dist/images/LoremDocumentation.jpg',
    project5: './dist/images/goodmeal.png',
    project6: './dist/images/thestore.jpg',
  };

  // update with new projects info
  const texts = {
    project1: 'This is a tribute page about Queen band. I prepared it as an exercise for FCC certification in Responsive Web Design. It was prepared with pure ES6 and SASS for styling. It is a quite simple desing but I tried to make it a bit more attractive.',
    project2: 'This project is my approach to make a solid survey-form example with solid semantics and custom form validation with JS used. In the future there might be additional backend script added to handle data got from the form. Besides that, all functionality is fully prepared. Form is prepared with CSS grid usage. I also added custom feel and look to inputs.',
    project3: 'It is a landing page for selling a bike. Website is prepared for FCC RWD certification. Made using SASS and vanilla JS. Burger menu in this project is quite good. It was inspired by project found on web, but built on my own.',
    project4: '"Lorem documentation" is an example documentation application. It has several comfortable features like toggle dark mode, change font size. You can also fetch additional fake data from a different server to get more data about a certain topic. In order to find a topic of your interest you can also simply use a convenient search bar. Layout was build with CSS grid. Fetch is performed with async/await function.',
    project5: 'This is my first serious application build using React and React-router. I made it as an example restaurant website with some added features. It supports proper client side form validation with US phone format. In the future it will also provide you possibility to find your favourite dishes using Food2Fork API.',
    project6: 'Welcome to a fake "THE STORE" app prepared to full imitate a fully functioning store. It was built with React and Redux for global state management. LocalStorage is used for comfort when using forms. Form are fully functional. They were built with the use of Netlify forms API. Payments are served by PayPal API.',
  };

  // update with new projects info
  const links = {
    project1: 'https://github.com/RXstoinkboy/Tribute-page',
    project2: 'https://github.com/RXstoinkboy/survey-form',
    project3: 'https://github.com/RXstoinkboy/bikeLandingPage',
    project4: 'https://github.com/RXstoinkboy/documentationPage',
    project5: 'https://github.com/RXstoinkboy/goodmeal',
    project6: 'https://github.com/RXstoinkboy/the-store',
  };

  details.style.display = 'flex';
  detailsImg.src = `${pictures[e.target.dataset.project]}`;
  detailsInfo.innerText = `${texts[e.target.dataset.project]}`;
  detailsLink.href = `${links[e.target.dataset.project]}`;

  close.addEventListener('click', () => {
    details.style.display = 'none';
  });
}
