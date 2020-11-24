
let beerForm;
let reviewForm;
let current_beer_id;
const rootUrl = "http://localhost:3000/beers";

document.addEventListener('DOMContentLoaded', () => {
  beerForm = document.getElementById('beerForm');
  reviewForm = document.getElementById('reviewForm');
  
  fetchBeer();
  fetchAllBeers();
});

function fetchBeer(){
  fetch(`${rootUrl}/1`)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
      renderBeer(json)
    })
}

function renderBeer(beer){
  current_beer_id = beer.id;
  const title = document.querySelector('div.beer-details > h2');
  const img = document.querySelector('div.beer-details > img');
  
  const descriptionTextArea = document.querySelector('form.description > textarea');
  const updateBtn = document.querySelector('form.description > button');
  
  title.innerHTML = beer.name;
  img.src = beer.image_url;
  descriptionTextArea.innerHTML = beer.description;

  // EventListener for update btn
  updateBtn.addEventListener('click', function(event){
    //beer.description = event.target.description.value;
    beer.description = document.getElementById('beerForm').description.value;
    let newBeerData = JSON.stringify(beer);
    const configObject = { 
      method: "PATCH", 
      headers: {"Content-Type": "application/json", "Accept": "application/json" }, 
      //body: JSON.stringify({description: descriptionTextArea.innerHTML})
      body: newBeerData
    };
    console.log(newBeerData);
    fetch(`${rootUrl}/${current_beer_id}`, configObject)
      .then(resp => resp.json())
      .then(json => renderBeer(json))
  })

  // EventListener for post review btn
  reviewForm.addEventListener('submit', function(event){
    beer.reviews.push(event.target.review.value);
    console.dir(beer);
    const newBeerData = JSON.stringify(beer);
    const configObject = { 
      method: "PATCH", 
      headers: {"Content-Type": "application/json", "Accept": "application/json" }, 
      body: newBeerData
    };
    fetch(`${rootUrl}/${current_beer_id}`, configObject)
      .then(resp => resp.json())
      .then(json => {
        console.dir(json)
        renderBeer(json)
      })
  });

  renderBeerReview(beer);
}

function renderBeerReview(beer){
  const reviewList = document.querySelector('ul.reviews');
  const reviews = beer['reviews'];
  reviewList.innerHTML = '';
  for(let i=0; i < reviews.length; i++){
    let listItem = document.createElement('li');
    listItem.innerHTML = reviews[i];
    reviewList.append(listItem);
  }
}

function fetchAllBeers(){
  fetch(rootUrl)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
      renderNav(json)
    })
}

function renderNav(beers){
  const navList = document.querySelector('nav > ul');
  navList.innerHTML = '';
  for(let i=0; i < beers.length; i++){
    let listItem = document.createElement('li');
    listItem.innerHTML = beers[i].name;
    navList.append(listItem);
    listItem.addEventListener("click", function(event) {
      renderBeer(beers[i]);
    });
  }
}