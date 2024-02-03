window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const logo = document.querySelector('[data-header-logo]');
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('header--no-transparency');
    logo.classList.add('logo--white');
  } else {
    header.classList.remove('header--no-transparency');
    logo.classList.remove('logo--white');
  }
}
