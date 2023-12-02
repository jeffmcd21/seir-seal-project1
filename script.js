
//https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

const baseURL = "https://app.ticketmaster.com/discovery/v2/"
const endpoint = "events.json?countryCode=US&"
const apikey = "apikey=107CcXtgxDmxSxoIjOucSPDRBTMyB9Gn"

const url = baseURL + endpoint + apikey

fetch(url)
.then(res => res.json())
.then(data => console.log(data))





// function getPlayer(playerName){
    

//     console.log(url)


// fetch(url)
// .then(res => {return res.json()})
// .then((data) => {
//     renderPlayerStats(data)
// })
// }




