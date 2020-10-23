const searchBox = document.querySelector('.btn');
const cityValue = document.querySelector('.search-location input')

//event listener
searchBox.addEventListener('submit', e => { 
   e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
})