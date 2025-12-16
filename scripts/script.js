
// Part 1

let mainEl = document.querySelector('main');

// we need var() function to access the root variaable with '--': https://www.w3schools.com/css/css3_variables_javascript.asp
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');


// Part 2

let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');


// Part 3

// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// it doesnt work for for..in .. have to use forEach, find out why?
// should use for of.
// menuLinks.forEach((link) => {
//     let aElement = document.createElement('a');
//     aElement.setAttribute('href', link.href);
//     aElement.textContent = link.text;
//     topMenuEl.appendChild(aElement);
// });

for(let link of menuLinks){
    let aElement = document.createElement('a');
    aElement.setAttribute('href', link.href);
    aElement.textContent = link.text;
    topMenuEl.appendChild(aElement);
}


