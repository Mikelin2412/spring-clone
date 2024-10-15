const cardsContainer = document.querySelector('.cards-container');

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
