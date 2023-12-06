
//https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
//https://developer-acct.ticketmaster.com/user/login?destination=user

//const apikey = "apikey=107CcXtgxDmxSxoIjOucSPDRBTMyB9Gn"

const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=107CcXtgxDmxSxoIjOucSPDRBTMyB9Gn&keyword="

function getEvent(eventName) {
const url = baseURL + eventName
    //console.log(url)
fetch(url)
.then(res => {return res.json()})
.then(data => {
    returnEventRequest(data)
    console.log(data)
    })
}

function returnEventRequest(event) {
    const eventDiv = document.querySelector(".event")
    eventDiv.innerHTML = `
    <h3>${event._embedded.events[0].name}</h3>
    <h6>${event._embedded.events[0].url}</h6>

    <h3>${event._embedded.events[1].name}</h3>
    <h6>${event._embedded.events[1].url}</h6>

    // <h3>${event._embedded.events[2].name}</h3>
    // <h6>${event._embedded.events[2].url}</h6>

    // <h3>${event._embedded.events[3].name}</h3>
    // <h6>${event._embedded.events[3].url}</h6>

    // <h3>${event._embedded.events[4].name}</h3>
    // <h6>${event._embedded.events[4].url}</h6>

    // <h3>${event._embedded.events[5].name}</h3>
    // <h6>${event._embedded.events[5].url}</h6>

    // <h3>${event._embedded.events[6].name}</h3>
    // <h6>${event._embedded.events[6].url}</h6>

    // <h3>${event._embedded.events[7].name}</h3>
    // <h6>${event._embedded.events[7].url}</h6>

    // <h3>${event._embedded.events[8].name}</h3>
    // <h6>${event._embedded.events[8].url}</h6>

    // <h3>${event._embedded.events[9].name}</h3>
    // <h6>${event._embedded.events[9].url}</h6>

    `    
}

function eventRequest(request) {
    request.preventDefault()
    const form = request.target;
    //console.log(form)
    const formData = new FormData(form)
    const eventName = formData.get("eventName")
    //console.log(eventName)
    getEvent(eventName)
    
}

document.querySelector("form").addEventListener("submit", eventRequest)
getEvent("Buffalo Sabres")
