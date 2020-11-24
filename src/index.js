const beerURL = 'http://localhost:3000/beers'

document.addEventListener('DOMContentLoaded', () => {
    fetchBeers();
}) 

function fetchBeers(){
    fetch(beerURL)
    .then(resp => resp.json())
    .then(json => {
        renderBeers(json)
    })
}

function renderBeers(beers) {
    console.log(beers)
    firstBeer = beers[0]
    const h2 = document.querySelector("h2")
    const description = document.querySelector(".description")
    const textarea = description.children[0]
    const img = document.querySelector("img")
    const reviewsUl = document.querySelector(".reviews")
    const reviewsLi = reviewsUl.children

    h2.textContent = firstBeer.name
    textarea.value = firstBeer.description
    img.src = firstBeer.image_url
    reviewsLi.textContent = firstBeer.reviews

    const editBtn = document.querySelector("button")
    editBtn.addEventListener("submit", function() {
        const configObj = {
            method: "PATCH", 
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                textarea: textarea.value 
            })
        };

        fetch(beerURL, configObj) 
        .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log(object);
          }); 
    })
}