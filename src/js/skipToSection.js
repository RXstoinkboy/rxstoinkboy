export function skipToSection(e) {
  const projects = document.querySelector('.projects');
  const about = document.querySelector('.about');
  const header = document.querySelector('.header');
  const contact = document.querySelector('.contact');

  if (this.dataset.nav === 'projects') {
    projects.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  } else if (this.dataset.nav === 'about') {
    about.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  } else if (this.dataset.nav === 'header') {
    header.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  } else if (this.dataset.nav === 'contact') {
    contact.scrollIntoView({
      behavior: 'smooth', block: 'start',
    });
  }
}
