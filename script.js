
//https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
//https://developer-acct.ticketmaster.com/user/login?destination=user

//const apikey = "apikey=107CcXtgxDmxSxoIjOucSPDRBTMyB9Gn"

const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=107CcXtgxDmxSxoIjOucSPDRBTMyB9Gn&keyword="

// function getEvent(eventName) {
// const url = baseURL + eventName
//     //console.log(url)
// fetch(url)
// .then(res => {return res.json()})
// .then(data => {
//     returnEventRequest(data)
//     console.log(data)
//     })
// }


function getEvent(eventName) {
    const url = `${baseURL}${eventName}`;
    // console.log(url);
  
    $.ajax({
      url,
      method: "GET",
      dataType: "json",
    })
    .done(data => {
      returnEventRequest(data);
      //console.log(data);
    })
  }


function returnEventRequest(event) {
    let show = ""
    const eventDiv = document.querySelector(".event")

    event._embedded.events.forEach(element => {
        show += `<div class="details">`
        show += `<h5 class="nameOfEvent">${element.name}</h5>`
        show += `<img style="width: 200px;" + src=${element.images[1].url}>`
        show += `<br><a class="eventDate">Event Date: ${element.dates.start.localDate}</a>` 
        show += `<br><a class="eventTime">Event Time: ${element.dates.start.localTime}</a>`
        show += `<br><button type="button" onclick="window.open('${element.url}' , '_blank')">Click to Buy</button>`
        show += `</div>`;
        
    });
    eventDiv.innerHTML=show


    // eventDiv.innerHTML = `
    // <h3>${event._embedded.events[0].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[0].images[1].url}> 
    // <a href="${event._embedded.events[0].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[0].dates.start.localDate}">Event Date: ${event._embedded.events[0].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[0].dates.start.localTime}">Event Time: ${event._embedded.events[0].dates.start.localTime}</a>

    // <h3>${event._embedded.events[1].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[1].images[1].url}> 
    // <a href="${event._embedded.events[1].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[1].dates.start.localDate}">Event Date: ${event._embedded.events[1].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[1].dates.start.localTime}">Event Time: ${event._embedded.events[1].dates.start.localTime}</a>

    // <h3>${event._embedded.events[2].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[2].images[1].url}> 
    // <a href="${event._embedded.events[2].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[2].dates.start.localDate}">Event Date: ${event._embedded.events[2].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[2].dates.start.localTime}">Event Time: ${event._embedded.events[2].dates.start.localTime}</a>

    // <h3>${event._embedded.events[3].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[3].images[1].url}> 
    // <a href="${event._embedded.events[3].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[3].dates.start.localDate}">Event Date: ${event._embedded.events[3].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[3].dates.start.localTime}">Event Time: ${event._embedded.events[3].dates.start.localTime}</a>

    // <h3>${event._embedded.events[4].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[4].images[1].url}> 
    // <a href="${event._embedded.events[4].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[4].dates.start.localDate}">Event Date: ${event._embedded.events[4].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[4].dates.start.localTime}">Event Time: ${event._embedded.events[4].dates.start.localTime}</a>

    // <h3>${event._embedded.events[5].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[5].images[1].url}> 
    // <a href="${event._embedded.events[5].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[5].dates.start.localDate}">Event Date: ${event._embedded.events[5].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[5].dates.start.localTime}">Event Time: ${event._embedded.events[5].dates.start.localTime}</a>

    // <h3>${event._embedded.events[6].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[6].images[1].url}> 
    // <a href="${event._embedded.events[6].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[6].dates.start.localDate}">Event Date: ${event._embedded.events[6].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[6].dates.start.localTime}">Event Time: ${event._embedded.events[6].dates.start.localTime}</a>

    // <h3>${event._embedded.events[7].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[7].images[1].url}> 
    // <a href="${event._embedded.events[7].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[7].dates.start.localDate}">Event Date: ${event._embedded.events[7].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[7].dates.start.localTime}">Event Time: ${event._embedded.events[7].dates.start.localTime}</a>

    // <h3>${event._embedded.events[8].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[8].images[1].url}> 
    // <a href="${event._embedded.events[8].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[8].dates.start.localDate}">Event Date: ${event._embedded.events[8].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[8].dates.start.localTime}">Event Time: ${event._embedded.events[8].dates.start.localTime}</a>

    // <h3>${event._embedded.events[9].name}</h3>
    // <img style="width: 200px;" + src=${event._embedded.events[9].images[1].url}> 
    // <a href="${event._embedded.events[9].url}">Click here for seating chart, pricing, and tickets</a>", 
    // <a href="${event._embedded.events[9].dates.start.localDate}">Event Date: ${event._embedded.events[9].dates.start.localDate}</a>, 
    // <a href="${event._embedded.events[9].dates.start.localTime}">Event Time: ${event._embedded.events[9].dates.start.localTime}</a>
    // `    
}

function eventRequest(request) {
    request.preventDefault()
    const form = request.target;
    //console.log(form)
    const formData = new FormData(form)
    const eventName = formData.get("eventName")
    //console.log(eventName)
    getEvent(eventName)
    //document.form.reset();
    $("input").val(" ")
    //console.log(formData.getAll())
}

document.querySelector("form").addEventListener("submit", eventRequest)
getEvent("Buffalo Sabres")




