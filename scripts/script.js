const cardsContainer = document.querySelector('.cards-container');
const navbarMenuContainer = document.querySelector('.nav-bar__menu');

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
