let searchQueary = document.getElementById('searchbar').value
const searchButton = document.getElementById('search-button')
let htmlImage = document.getElementById('image')
let title = document.getElementById('movie-title')


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '50ebfbd5f7mshdf84906861363b2p120042jsn563a23a38166',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        q: searchQueary

    }
};





searchButton.addEventListener('click', function (e) {
    e.preventDefault()

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchQueary}`, options)
        .then(response => response.json())
        .then(data => {
            title.innerText = data.d[3].l
            htmlImage.src = data.d[3].i.imageUrl
            console.log(data)
        })
        .catch(err => console.error(err));

})