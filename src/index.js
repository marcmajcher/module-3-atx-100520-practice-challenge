const beersURL = 'http://localhost:3000/beers'

document.addEventListener('DOMContentLoaded', ()=> {
  fetchAllBeers();
  renderFirstBeer();
  editDescriptionListener();
});

function fetchAllBeers () {
  fetch(beersURL)
    .then(response => response.json())
    .then(data => renderMenu(data))
};

function renderFirstBeer () {
  fetchBeer(beersURL + '/1')
};

function renderMenu (beers) {
  const navMenu = document.getElementById('nav-menu')
  beers.forEach(beer => {
    const li = document.createElement('li');
    const beerName = document.createTextNode(beer.name);

    li.innerText = beer.name;
    li.value = beer.id;
    navMenu.appendChild(li);
    beerNameListener(li);
  });
};

function beerNameListener (beer) {
  beer.addEventListener('click', (event) => {
    fetchBeer(beersURL + `/${event.target.value}`)
  });
};

function fetchBeer (beerUrl) {
  fetch(beerUrl)
    .then(response => response.json())
    .then(data => renderBeer(data))
};

function renderBeer (beer) {
  const pageBody = document.querySelector('.beer-details');

  const beerName = pageBody.querySelector('h2');
  beerName.value = beer.id;
  const img = pageBody.querySelector('img');
  const desc = pageBody.querySelector('textarea');
  desc.id = beer.id;
  const reviews = pageBody.querySelector('.reviews')
  removeReviews(reviews);
  
  beer.reviews.forEach(review => {
    const li = document.createElement('li')
    li.innerText = review;
    reviews.appendChild(li);
  });

  beerName.innerText = beer.name;
  img.src = beer.image_url;
  desc.innerText = beer.description;
};

function removeReviews (reviews) {
  const reviewChildren = reviews.querySelectorAll('li');
  for (i = 0; i < reviewChildren.length + 1; i++) {
    if (!(reviewChildren[i] === undefined)) {
      reviewChildren[i].remove();
    };
  };
};

function editDescriptionListener () {
  const descForm = document.querySelector('.description');
  descForm.addEventListener('submit', (event) => {
    const textArea = descForm.querySelector('textarea')
    fetch(beersURL + `/${textArea.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        description: textArea.value
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  });
};