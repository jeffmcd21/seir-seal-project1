
//const baseURL = "https://anapioficeandfire.com/api/"
//const endpoint = "houses"

const baseURL = "http://lookup-service-prod.mlb.com/"
const endpoint = "/json/named.player_info.bam?sport_code='mlb'&player_id='493316'"

const url = baseURL + endpoint


fetch(url)
.then(res =>  res.json())
.then(data => console.log(data))