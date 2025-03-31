document.querySelector('button').addEventListener('click', getJoke)
let url = `https://api.thecatapi.com/v1/images/search`


function getJoke(){

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.querySelector('img').src = data[0].url
            })
            .catch(err => {
                console.log(`Error ${err}`)
            } )
        }