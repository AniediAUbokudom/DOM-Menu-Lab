var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl

const mainEl = document.querySelector("main");
//Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

mainEl.style.backgroundColor = 'var(--main-bg)';

//Task 1.2
//Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task 1.3
//Add a class of flex-ctr to mainEl.


mainEl.classList.add('flex-ctr');

//Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.querySelector("#top-menu");

//Task 2.1
// Set the height topMenuElelement to be 100%

topMenuEl.style.height = '100%;'

//Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task 2.3
// Add a class of flex-aroundto topMenuEl

topMenuEl.classList.add("flex-around");

//Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:


menuLinks.forEach(function (link) {
  const linkElement = document.createElement("a");
  linkElement.textContent = link.text;
  linkElement.href = link.href;
  linkElement.classList.add("menu-link");
  topMenuEl.appendChild(linkElement);
});
