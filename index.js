// const fetchData = async(searchTerm) => {
//     const response = await axios.get('http://omdbapi.com/',{
//     params: {
//     apikey:'c784a164',
//     s: 'avengers'
//     }
//     })
    
//     if(response.data.Error){
//     return[]
    
//     }
    
//     console.log(response.data.Search)
//     }
    //fetchData()
autoCompleteConfig = {
renderOption(movie){
const imgSec = movie.Poster == 'N/A' ? '' :movie.poster
return`
<img src="${imgSrc}"/>
${movie.Title}(${movie.year})
`
},
inputValue(movie){
return movie.Title


},
async fetchData(searchTerm){
apiMovieURL ='http://www.omdapi.com/' 
const response = await axios.get(apiMovieURL, {
params: {
apikey: 'c784a164',
s: searchTerm
}


})
if(response.data.error){
return[]

}
console.log(response.data)
return response.data.Search
}


}

creatureAutoComplete({
autoCompleteConfig,
root: document.querySelector('#left-autocomplete'),
onOptionSelect(movie){
document.querySelector('.tutorial').classList.add('is-hidden')
onMovieSelect(movie, document.querySelector/('#left-summery'), 'left')

}

})
//crear 2 variables para leftmovie y rightmovie
let leftmovie
let rightmovie

const onMovieSelect = async (movie, summaryElement, side) =>{
    const response = await axios.get('http://www.omdibapi.com/', {
params:{
apikey: 'c784a164',
i: movie.imdbID
}


    })
console.log(response.data)
summaryElement.innerHTML = movieTemplance(response.data)
if(side === 'left'){
leftmovie = response.data

}else{
rightmovie = response.data

}
if(leftmovie && rightmovie){
runComparison ()

}

}
const runComparison = () =>{
console.log('comparacion de peliculas')
const leftSidesStats = document.querySelectorAll('#left-summary .notification')
const rightSideStats = document.querySelectorAll('#rigth-summary .notification')


leftSidesStats.forEach((LeftStat, index) =>{
const rightStat = rightSideStats[index]
const leftSideValue = parseInt(LeftStat.dataset.value)
const rightSideValue = parseInt(rightStat.dataset.value)
if(rightSideValue > leftSideValue){
LeftStat.classList.remove('is-primary')
LeftStat.classList.add('is-danger')

}else{
rightStat.classList.remove(is-primary)
rightStat.classList.add(is-primary)
}
})


}
const movieTemplates = (movieDetail) =>{
    //Transformar a numeros los strings que llevan los datos
    const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g,'').replace(/,/g,''))
    console.log(dollars)
    const metascore = parseInt(movieDetail.Metascore)
    const imdbRating = parseFloat(movieDetail.imdbRating)
    const imdbvotes = parseInt(movieDetail.indbvotes.replace(/,/g,''))
    console.log(metascore, imdbRating, imdbvotes)
    const awards = movieDetail.awards.split('').reduce((prev,word) => {
        const value = parseInt(word)
        if(isNaN(value)){
            return prev
        }else{
            return prev + value
        }
        
    },0)
    console.log('Awards', awards)
}
//Agregar la propiedad data-value a cada elemento del templace
return`
<artucle class="media">
<figure class="media-left">
<p class="image">
<img src="${movieDetail.Poster}"/>
</p>
</figure>

<div class="media-content">
<div class="content">
<h1>${movieDetail.Title}</h1>
<h4>${movieDetail.Genre}</h4>
<p>${movieDetail.Plot}</p>
</div>
</div>
<article/>
<article data-values=${awards} class="notification is-primary">
<p class="title"${movieDetail.awards}</p>
<p class="subtitle"Awards</p>
</article>
<article data-values=${dollars} class="notification is-primary">
<p class="title"${movieDetail.BoxOffice}</p>
<p class="subtitle"BoxOffice</p>
</article>
<article data-values=${Metascore} class="notification is-primary">
<p class="title"${movieDetail.Metascore}</p>
<p class="subtitle"metascore</p>
</article>

<article data-values=${imdbRating} class="notification is-primary">
<p class="title"${movieDetail.imdbRating}</p>
<p class="subtitle"imdRating</p>

<article data-values=${imdbvotes} class="notification is-primary">
<p class="title"${movieDetail.imdbvotes}</p>
<p class="subtlite"imd votes</p>



</article>
</article>

<
`
console.log("hola")

    const root = document.querySelector('.autocomplete')
    root.innerHTML = `
    <label><b>Busqueda de peliculas</b></label>
    <input class="input" />
    <div class="dropdown">
    <div class="dropdown-menu">
    <div class="dropdown.content results"></div>
    </div>
    
    </div>
    `
    
    const input = document.querySelector("input")
    const dropdown = document.querySelector('.dropdown')
    const resultWrapper = document.querySelector('.results')
    
    const debonce =(func, delay = 1000) =>{
    let timeoutid
    return(...args) => {
    clearTimeout(timeoutid)
    timeoutid = setTimeout(() => {
        func.apply(null, args)
    }, delay)
    
    }
    
    }
    
    const onInput = async(event) =>{
    const movies = await fetchData(event.target.value)
    console.log("MOVIES", movies)
    if(!movies.length){
    dropdown.classList.remove('is-active')
    return
    }
    resultWrapper.innerHTML = ''
    dropdown.classList.add('is-active')
    
    for(let movie of movies){
    const option = Document.createElement('a')
    const imgSrc = movie.Poster === 'N/A' ? '': movie.poster
    //<a href="www.balblablallbalballab.com>gogle </a> "
    option.classList.add('dropdown-item')
    option.innerHTML = `
    <img src="${imgSrc}"/>
    ${movie.Title}
    
    `
    option.addEventListener('click', () => {
    dropdown.classList.remove('is-active')
    input.value = movie.Title
    onMovieSelect(movie)
    })
    resultWrapper.appendChild(option)
    }
    }
    input.addEventListener('input', debonce(onInput, 1000))
    document.addEventListener('click', event => {
if(!root.contains(event.target)){
dropdown.classList.remove('is-active')

}

    })
const onMovieSelect = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/',{
params: {
apikey:'',
i: movie.imdbID

}

    })
}
console.log(response.data)
document.querySelector('#sumary').innerHTML = movieTemplance()

const movieTemplance = (movieDetail) => {
return `
<article class="media">
<figure class="media-left">
<p class="image">
<img src="${movieDetail.Poster}" />

</p>
</figure>
<div class="media-content">
<div class="content">
<h1>${movieDetail.Title}</1>
<h4>${movieDetail.Genre}</4>
<p>${movieDetail.Plot}</p>
</div>
</div>
</article>
`

}
