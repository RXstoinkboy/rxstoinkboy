export function skipToSection(e) {
  console.log(e.target.dataset);
  const el = {};
  el.type = e.target.dataset.nav;
  console.log(el.type);

  el[type].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  },
  );
}
