const fetchData = async(searchTerm) => {
    const response = await axios.get('http://omdbapi.com/',{
    params: {
    apikey:'c784a164',
    s: 'avengers'
    }
    })
    
    if(response.data.Error){
    return[]
    
    }
    
    console.log(response.data.Search)
    }
    //fetchData()
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
