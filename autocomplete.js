const creatureAutoComplete 
=({root, rederOption, onOptionSelect, inputValue, fetchData})  => {
//function CreatureAUTOcOMPLETE


root.innerHTML=`
<label><b>Busqueda</b></label>
<input class="input"/>
<div class="dropdown">
<div class="dropdown-menu">
<div class="dropdown-content rsults"></div>
</div>
</div>
`
}

const input = root.querySelector('input')
const dropdown = root.querySelector('.dropdown')
const resultWrapper = root.querySelector('.result')

const debonce =(func, delay = 1000) =>{
    let timeoutid
    return(...args) => {
    clearTimeout(timeoutid)
    timeoutid = setTimeout(() => {
        func.apply(null, args)
    }, delay)
}
}
const onInput = async event => {
const items = await fetchData(event.target.value)
console.log("Movies, items")
if (!items.length){
dropdown.classList.remove('is-active')
return
}
resultWrapper.innerHTML=''
dropdown.classList.add('is-active')
for(let item of items) {
const option = Document.createElement('a')

option.classList.add('dropdown-item')
option.innerHTML = renderOption(item)
option.addEventListener('click', () =>{
    dropdown.classList.remove('is-active')
    input.value = inputValue(item)
    onOptionSelect(item)
    console.log("onMovieSelect")

    })
resultWrapper.appendChild(option)

  }
input.addEventListener('input', debounce(onInput, 1000))
document.addEventListener('click', event => {
if(!root.contains(event.target)){
dropdown.classList.remove('is-active')
    }


  })
}
