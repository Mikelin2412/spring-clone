const cardsContainer = document.querySelector('.cards-container');
const navbarMenuContainer = document.querySelector('.nav-bar__menu');
const body = document.body;

TablesInfo.forEach((info) => {
  const card = document.createElement('a');
  card.href = info.cardUrl;
  card.className = 'card-link';
  card.innerHTML = `<div class="card">
                <div class="card__image-wrapper">
                  <img class="card__image" src=${info.imageSrc} alt=${info.title} />
                </div>
                <div class="card__info">
                  <h3 class="card__info-title">${info.title}</h3>
                  <p class="card__info-description">${info.description}</p>
                </div>
              </div>`;
  cardsContainer.append(card);
});

NavigationMenuItems.forEach((item) => {
  const navItem = document.createElement('div');
  navItem.className = 'nav-bar__item';
  navItem.innerHTML = `<span class="nav-bar__item-text">${item.title}</span>`;
  const dropdownMenu = document.createElement('ul');
  dropdownMenu.className = 'nav-bar__dropdown-menu dropdown-menu';

  item.items.forEach((value) => {
    const menuItem = document.createElement('li');
    menuItem.className = 'dropdown-menu__item';
    menuItem.innerHTML = `<a class="dropdown-menu__item-link" href=${value.link}>${value.name}</a>`;
    dropdownMenu.append(menuItem);
  });

  navItem.append(dropdownMenu);
  navbarMenuContainer.append(navItem);
});

// Burger Menu
const burgerButton = document.querySelector('.burger-menu-button');
const sideMenu = document.querySelector('.side-menu');

const navigationItemsContainer = document.createElement('div');
navigationItemsContainer.className = 'side-menu__navigation-items';

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  sideMenu.classList.toggle('active');
  if (burgerButton.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

NavigationMenuItems.forEach((item) => {
  const navItem = document.createElement('div');
  navItem.className = 'navigation-item';

  const navItemName = document.createElement('span');
  navItemName.className = 'navigation-item__name';
  navItemName.innerHTML = `${item.title}`;

  navItem.append(navItemName);
  const dropdownNavLinks = document.createElement('ul');
  dropdownNavLinks.className = 'navigation-item__list';

  item.items.forEach((value) => {
    const linkItem = document.createElement('li');
    linkItem.innerHTML = `<a class="list-item" href=${value.link}>${value.name}</a>`;
    dropdownNavLinks.append(linkItem);
  });

  navItem.append(dropdownNavLinks);
  navigationItemsContainer.append(navItem);
  sideMenu.append(navigationItemsContainer);
});

const navItemsName = document.querySelectorAll('.navigation-item__name');
navItemsName.forEach((el) => {
  el.addEventListener('click', (e) => {
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.navigation-item__name.open').forEach((el) => {
      el.classList.remove('open');
    });

    if (!isOpen) {
      el.classList.add('open');
    }
  });
});

// Search input
const searchInput = document.querySelector('.search-input');

const searchData = (event) => {
  cardsContainer.innerHTML = '';
  const value = event.target.value.toLowerCase();
  const correctValues = TablesInfo.filter((item) => item.title.toLowerCase().includes(value));
  if (!correctValues.length) {
    const noResultText = document.createElement('h2');
    noResultText.classList.add('no-results-text');
    noResultText.innerHTML = 'No results';
    cardsContainer.append(noResultText);
  }
  correctValues.forEach((info) => {
    const card = document.createElement('a');
    card.href = info.cardUrl;
    card.className = 'card-link';
    card.innerHTML = `<div class="card">
                <div class="card__image-wrapper">
                  <img class="card__image" src=${info.imageSrc} alt=${info.title} />
                </div>
                <div class="card__info">
                  <h3 class="card__info-title">${info.title}</h3>
                  <p class="card__info-description">${info.description}</p>
                </div>
              </div>`;
    cardsContainer.append(card);
  });
};

const debounce = (callback, waitTime) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, waitTime);
  };
};

const debounceHandler = debounce(searchData, 300);
searchInput.addEventListener('keyup', debounceHandler);
