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

// Objednavani napoje po clicknuti na Objednej btn - zmeni napis na btn na Zrusit a zmeni obrazok.

// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// let ordered = false;

// orderBtnElm.addEventListener('click', () => {
//   if (ordered === false) {
//     orderBtnElm.textContent = 'Zrušit';
//     drinkCupElm.classList.add('drink__cup--selected');
//     ordered = true;
//   } else if (ordered === true) {
//     orderBtnElm.textContent = 'Objednat';
//     drinkCupElm.classList.remove('drink__cup--selected');
//     ordered = false;
//   }
// });

// Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme přepisovat kód tak, aby ingredience (vrstva) byla komponenta.

// const layerElm = document.querySelector('.drink__info');

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// for (let i = 0; i < layers.length; i++) {
//   layerElm.innerHTML += Layer(layers[i]);
// }

//Nápoj jako komponenta

import { Drink } from './Drink/index';

//SEZNAM NAPOJU

// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];

const drinkListElm = document.querySelector('.drinks-list');

// for (let i = 0; i < drinks.length; i++) {
//   drinkListElm.appendChild(Drink(drinks[i]));
// }

const loadDrinks = fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      drinkListElm.appendChild(Drink(json[i]));
    }
  });
