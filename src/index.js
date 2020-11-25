// Code here

const beerUrl = 'http://localhost:3000/beers'

document.addEventListener("DOMContentLoaded", (e) => {
    fetchBeers()
    fetchAllBeers()
    
})

function fetchBeers() {
    fetch(beerUrl)
    .then(r => r.json())
    .then(json => {
        renderBeer(json[0])
        
    })
  
}

function renderBeer(beer) {
   const header = document.querySelector('.beer-details h2')
   const img = document.querySelector('.beer-details img')
   const description = document.querySelector('.description textarea')
   header.innerText = beer.name
   img.src = beer.image_url
   description.value = beer.description

   renderReviews(beer)
   updateDescription(beer)
}

function renderReviews(beer) {
   
    list = document.querySelector('.reviews')
    list.innerHTML = ''
    const reviews = beer.reviews
    reviews.forEach(review => {
        listItem = document.createElement('li')
        list.appendChild(listItem)
        listItem.innerText = review
    });
}

function updateDescription(beer) {
    const form = document.querySelector('.description')
   
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const description = e.target.children[0].value
    
   
    fetch(`http://localhost:3000/beers/${beer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"  
            },
            body: JSON.stringify({
                description
                    })
                  })

                })
   
}

function fetchAllBeers() {
    fetch(beerUrl)
    .then(r => r.json())
    .then(json => {
        renderAllBeers(json) } )
    }

function renderAllBeers(beers) {
    const menu = document.querySelector('nav ul')
    menu.innerHTML = ''
        for(let i = 0; i < beers.length; i++) {
            
            let listItem = document.createElement('li')
            menu.append(listItem)
            listItem.innerHTML = beers[i].name
            listItem.addEventListener('click', () => {
                renderBeer(beers[i])
                console.log('clicked')
            })
            }
        }

    




































// document.addEventListener("DOMContentLoaded", () => {

//     fetchBeer();
//     changeDescription()
// })

// function fetchBeer() {

//     const url = 'http://localhost:3000/beers/1'
//     fetch(url)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         renderBeer(json)
        
//     })
// }

// function renderBeer(beer) {

//     const name = beer["name"]
//     const image = beer["image_url"]
//     const description = beer["description"]
//     const reviews = beer["reviews"]
//     console.log(reviews)
//     const img = document.querySelector('img')
//     const h2 = document.querySelector('h2')
//     const beerDescription = document.querySelector('textarea')
//     const reviewBlock = document.querySelector('.reviews')
//     renderReviews(beer)
//     h2.innerText = name
//     img.src = image
//     beerDescription.innerText = description
  
        
//     }

//     function renderReviews(beer) {
//         const reviewList = document.querySelector('.reviews');
//         reviewList = innerHTML = '';
//         beer.reviews.forEach(review => {
//             const reviewItem = document.createElement('li');
//             reviewItem.innerText = review;
//             reviewList.append(reviewItem)
//         })
//     }
// function changeDescription() {
//     const form = document.querySelector('.description')

        
//     form.addEventListener("submit", (e) => {
//         e.preventDefault()
//         const newDescription = document.querySelector('textarea').innerText

//         
        
    

    
//     let more = parseInt(e.target.previousElementSibling.innerText) + 1
  
//    

    
