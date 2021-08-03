const baseUrl = "https://ghibliapi.herokuapp.com/films"
// const baseUrl = "https://api.thecatapi.com/v1/breeds?api_key=1c6400b7-b611-45ea-bfbe-01da96c8435b";
let url

const searchForm = document.getElementById("form");
const movies = document.querySelector("#movieTitles");

searchForm.addEventListener("submit", fetchMovies);

 async function fetchMovies(e){
      e.preventDefault();
    
     const response = await fetch(baseUrl)
     console.log(response)
     const results = await response.json()
     console.log(results)
     results.forEach(element => {
         let box = document.createElement ('div')
         let title = document.createElement ('p')
         title.innerText=element.title
        movies.appendChild(box)
        box.appendChild(title)
        box.setAttribute("class", "bg")

         console.log(element.title)
        
    });
   }




