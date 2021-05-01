import './style.css';

console.log('funguju!');

// Hamburger menu will show dropdown menu on click and hide when a navigation link is clicked.

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const navLinksElm = document.querySelectorAll('nav a');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

navLinksElm.forEach((elm) => {
  elm.addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
});

// Objednavani napoje po clicknuti na Objednej btn

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false;

orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else if (ordered === true) {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
