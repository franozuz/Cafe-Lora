import './style.css';

console.log('funguju!');

// Hamburger menu will show dropdown menu on click and hide when a navigation link is clicked.

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

navElm.addEventListener('click', () => {
  navElm.classList.add('nav-closed');
});
