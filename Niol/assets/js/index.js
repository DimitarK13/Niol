const navToggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#primary-nav');

navToggle.addEventListener('click', () => {
  nav.toggleAttribute('opened');
});
