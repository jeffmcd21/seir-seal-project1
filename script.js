
const baseURL = "https://anapioficeandfire.com/api/"

const endpoint = "characters"

const url = baseURL + endpoint


fetch(url)
.then(res =>  res.json())
.then(data => console.log(data))