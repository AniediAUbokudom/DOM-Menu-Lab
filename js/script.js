document.addEventListener("DOMContentLoaded", function() {
  // Task 1.0: Select and cache the <main> element in a variable named mainEl.
  const mainEl = document.querySelector('main');

  // Task 1.1: Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
  mainEl.style.backgroundColor = 'var(--main-bg)';

  // Task 1.2: Set the content of mainEl to <h1>SEI Rocks!</h1>.
  mainEl.innerHTML = '<h1>top selling</h1>';

  // Task 1.3: Add a class of flex-ctr to mainEl.
  mainEl.classList.add('flex-ctr');

  // Task 2.0: Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
  const topMenuEl = document.querySelector('#top-menu');

  // Task 2.1: Set the height of topMenuElelement to be 100%.
  topMenuEl.style.height = '100%';

  // Task 2.2: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

  // Task 2.3: Add a class of flex-around to topMenuEl.
  topMenuEl.classList.add('flex-around');

  // Task 3.0: Menu data structure
  var menuLinks = [
      { text: 'about', href: '/about' },
      { text: 'catalog', href: '#', subLinks: [
          { text: 'all', href: '/catalog/all' },
          { text: 'top selling', href: '/catalog/top' },
          { text: 'search', href: '/catalog/search' },
      ] },
      { text: 'orders', href: '#', subLinks: [
          { text: 'new', href: '/orders/new' },
          { text: 'pending', href: '/orders/pending' },
          { text: 'history', href: '/orders/history' },
      ] },
      { text: 'account', href: '#', subLinks: [
          { text: 'profile', href: '/account/profile' },
          { text: 'sign out', href: '/account/signout' },
      ] },
  ];

  // Task 3.1: Iterate over the entire menuLinks array and create links in the topMenuEl element.
  menuLinks.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', link.href);
      linkElement.textContent = link.text;
      topMenuEl.appendChild(linkElement);
  });

  // Task 4.0: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  const subMenuEl = document.querySelector('#sub-menu');

  // Task 4.1: Set the height of subMenuEl element to be 100%.
  subMenuEl.style.height = '100%';

  // Task 4.2: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

  // Task 4.3: Add the class of flex-around to the subMenuEl element.
  subMenuEl.classList.add('flex-around');

  // Task 4.4: Set the CSS position property of subMenuEl to the value of absolute.
  subMenuEl.style.position = 'absolute';

  // Task 4.5: Set the CSS top property of subMenuEl to the value of 0.
  subMenuEl.style.top = '0';

  // Global variable to keep track of the sub-menu visibility
  let showingSubMenu = false;

  // Task 5.0: Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
  const topMenuLinks = topMenuEl.querySelectorAll('a');

  // Task 5.1: Attach a delegated 'click' event listener to topMenuEl.
  topMenuEl.addEventListener('click', function(event) {
      event.preventDefault();

      // Task 5.2: Immediately return if the element clicked was not an <a> element.
      if (!event.target.matches('a')) return;

      // Task 5.3: If the clicked <a> link has a class of active, remove the active class and hide sub-menu.
      if (event.target.classList.contains('active')) {
          event.target.classList.remove('active');
          showingSubMenu = false;
          subMenuEl.style.top = '0';
          return;
      }

      // Task 5.4: Remove the class name of active from each <a> element in topMenuLinks.
      topMenuLinks.forEach(link => link.classList.remove('active'));

      // Task 5.5: Add a class name of active to the clicked <a> element.
      event.target.classList.add('active');

      // Task 5.6: Determine if sub-menu should be shown.
      const linkObj = menuLinks.find(link => link.text === event.target.textContent);
      showingSubMenu = linkObj.subLinks !== undefined;

      // Task 5.7: Build and display sub-menu if needed.
      if (showingSubMenu) {
          buildSubMenu(linkObj.subLinks);
          subMenuEl.style.top = '100%';
      } else {
          subMenuEl.style.top = '0';
      }
  });

  // Task 6.0: Attach a delegated 'click' event listener to subMenuEl.
  subMenuEl.addEventListener('click', function(event) {
      event.preventDefault();

      // Task 6.1: Hide sub-menu.
      showingSubMenu = false;
      subMenuEl.style.top = '0';

      // Task 6.2: Remove the class name of active from each <a> element in topMenuLinks.
      topMenuLinks.forEach(link => link.classList.remove('active'));

      // Task 6.3: Update the contents of mainEl to the contents of the clicked <a> element, within an <h1>.
      mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });

  // Task 5.8: Build the sub-menu function.
  function buildSubMenu(subLinks) {
      subMenuEl.innerHTML = ''; // Clear the contents of sub-menu.
      subLinks.forEach(link => {
          const linkElement = document.createElement('a');
          linkElement.setAttribute('href', link.href);
          linkElement.textContent = link.text;
          subMenuEl.appendChild(linkElement);
      });
  }
});
