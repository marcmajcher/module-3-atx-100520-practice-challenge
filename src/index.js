// Code here
document.addEventListener("DOMContentLoaded", () => {

    fetchBeer();
    changeDescription()
})

function fetchBeer() {

    const url = 'http://localhost:3000/beers/1'
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        renderBeer(json)
        
    })
}

function renderBeer(beer) {

    const name = beer["name"]
    const image = beer["image_url"]
    const description = beer["description"]
    const reviews = beer["reviews"]
    console.log(reviews)
    const img = document.querySelector('img')
    const h2 = document.querySelector('h2')
    const beerDescription = document.querySelector('textarea')
    const reviewBlock = document.querySelector('.reviews')
   
    h2.innerText = name
    img.src = image
    beerDescription.innerText = description
    const main = document.querySelector('main')
    const li = main.querySelectorAll('li')
       
    for(let i = 0; i < li.length; i++) {
           li[i].innerText = reviews[i]
        
        }
        
        
    }
function changeDescription() {
    const form = document.querySelector('.description')

        
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const newDescription = document.querySelector('textarea').innerText

        fetch("http://localhost:3000/beers/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"  
            },
            body: JSON.stringify({
                "description": newDescription
                    })
                  })
    
              })
        }
        
    

    
//     let more = parseInt(e.target.previousElementSibling.innerText) + 1
  
//    

    
