const getBeersUrl = "http://localhost:3000/beers";

document.addEventListener("DOMContentLoaded", function(){
    fetchBeers()
})

const fetchBeers = () => {
    fetch(getBeersUrl)
    .then(res => res.json())
    .then(beers => beers.forEach(beer => beerBuilder(beer)))
}

function beerBuilder(beer){
    let div = document.getElementById('beer-details')
    
    let li = document.createElement('li')
    li.className = "beers
    li.id = beer.id
    li.name = beer.name



};




// function buildBeers(beers){
// const target = document.getElementById('??')
// beers.forEach(beer => {
//     let targetBeer = buildBeer(beer)
//     target.appendChild(targetBeer)

// See the first beer's details, including its name, image, description, and reviews, when the page loads
// Change the beer's description and still see that change when reloading the page
// See a menu of all beers on the left side of the page -- clicking a beer's name replaces the currently displayed beer's details with the details of the beer I clicked on