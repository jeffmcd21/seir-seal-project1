
# Event Scene
##### By: Jeff McDonald

Github Repo: [Click Here](https://github.com/jeffmcd21/seir-seal-project1/)

Deployed Site: [Click Here](https://seir-seal-project1-tan.vercel.app/)


## Requirements for Project

1. Build with HTML, CSS, JavaScript and jQuery
2. Hosted on github, vercel.com
3. Frequent Commits to github (at least one per day)
4. A readme.md file with with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
5. Use AJAX to make a request to an external data source like IMDBapi and insert some of the data retrieved into the DOM


## Description on Project

The plan for this project is to develop a websit where the user can enter a specified place in the united states to find event infomation happening in the respective location.


## Details about the API

I am uning an API generated by TicketMaster and does require an API key. Once an account has been created you will find you API key automatically included in all provided links within the site.

- `https://developer.ticketmaster.com/products-and-docs/apis/getting-started/`: This is the sign up page for ticketmasters developer website.

Sample Fetch/Ajax called:
```js
const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=107CcXtgxDmxSxoIjOucSPDRBTMyB9Gn&keyword="

const url = baseURL 
    console.log(url)

fetch(url + "Metallica")
.then(res => res.json())
.then(data => console.log(data))```


The Data I get back:
```json
[0
: 
{name: 'Phoenix Suns vs. Memphis Grizzlies', type: 'event', id: 'G5v0Z9Yc3BZyy', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-memph…phoenix-arizona-12-02-2023/event/19005F0B52E80E79', …}
1
: 
{name: 'Atlanta Hawks vs. Phoenix Suns', type: 'event', id: 'vvG1zZ9YJwb39L', test: false, url: 'https://www.ticketmaster.com/atlanta-hawks-vs-phoe…atlanta-georgia-02-02-2024/event/0E005F09B26125DF', …}
2
: 
{name: 'Phoenix Suns vs. Golden State Warriors', type: 'event', id: 'G5v0Z9Yc3DYBk', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-golde…phoenix-arizona-12-12-2023/event/19005F0B52EF0E86', …}
3
: 
{name: 'Sacramento Kings vs. Phoenix Suns', type: 'event', id: 'G5vYZ9YBkpvBo', test: false, url: 'https://www.ticketmaster.com/sacramento-kings-vs-p…ento-california-12-22-2023/event/1C005F0E86581E91', …}
4
: 
{name: 'New Orleans Pelicans vs. Phoenix Suns', type: 'event', id: 'Z7r9jZ1AdJ9uK', test: false, url: 'https://www.ticketmaster.com/event/Z7r9jZ1AdJ9uK', …}
5
: 
{name: 'Orlando Magic vs Phoenix Suns', type: 'event', id: 'G5eFZ9sQP9jM0', test: false, url: 'https://www.ticketmaster.com/orlando-magic-vs-phoe…orlando-florida-01-28-2024/event/22005F16A55DCDE4', …}
6
: 
{name: 'Phoenix Suns vs. Brooklyn Nets', type: 'event', id: 'G5v0Z9Yc3HOBF', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-brook…phoenix-arizona-12-13-2023/event/19005F0B52F20E88', …}
7
: 
{name: 'Phoenix Suns vs. Charlotte Hornets', type: 'event', id: 'G5v0Z9YcKv8Bt', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-charl…phoenix-arizona-12-29-2023/event/19005F0B53050EA9', …}
8
: 
{name: 'Golden State Warriors vs. Phoenix Suns', type: 'event', id: 'G5vYZ9svB7-aF', test: false, url: 'https://www.ticketmaster.com/golden-state-warriors…isco-california-02-10-2024/event/1C005F107A121248', …}
9
: 
{name: 'Portland Trail Blazers vs. Phoenix Suns', type: 'event', id: 'vvG1HZ9YN-RJDT', test: false, url: 'https://www.ticketmaster.com/portland-trail-blazer…portland-oregon-12-19-2023/event/0F005F08E1BE6EFF', …}
10
: 
{name: 'Phoenix Suns vs. Orlando Magic', type: 'event', id: 'G5v0Z9YcKe8Bi', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-orlan…phoenix-arizona-12-31-2023/event/19005F0B53090EAC', …}
11
: 
{name: 'Brooklyn Nets v. Phoenix Suns', type: 'event', id: 'G5dZZ9Y2CCSkv', test: false, url: 'https://www.ticketmaster.com/brooklyn-nets-v-phoen…ooklyn-new-york-01-31-2024/event/30005F03CE3B3181', …}
12
: 
{name: 'Phoenix Suns vs. Miami Heat', type: 'event', id: 'G5v0Z9Yc3-8MC', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-miami…phoenix-arizona-01-05-2024/event/19005F0B52850DCE', …}
13
: 
{name: 'Miami Heat vs. Phoenix Suns', type: 'event', id: 'vvG1VZ9sda8rKs', test: false, url: 'https://www.ticketmaster.com/miami-heat-vs-phoenix…s-miami-florida-01-29-2024/event/0D005F10C941E4F1', …}
14
: 
{name: 'Indiana Pacers vs. Phoenix Suns', type: 'event', id: 'vvG1fZ9sdJAAly', test: false, url: 'https://www.ticketmaster.com/indiana-pacers-vs-pho…napolis-indiana-01-26-2024/event/05005F10E6145AF9', …}
15
: 
{name: 'Portland Trail Blazers vs. Phoenix Suns', type: 'event', id: 'vvG1HZ9YN-SUH3', test: false, url: 'https://www.ticketmaster.com/portland-trail-blazer…portland-oregon-01-14-2024/event/0F005F08E1CF6F12', …}
16
: 
{name: 'Milwaukee Bucks vs. Phoenix Suns', type: 'event', id: 'vvG1jZ9sTtWKwe', test: false, url: 'https://www.ticketmaster.com/milwaukee-bucks-vs-ph…aukee-wisconsin-03-17-2024/event/07005F1FE9F53C82', …}
17
: 
{name: 'Charlotte Hornets vs. Phoenix Suns', type: 'event', id: 'G5eVZ9R6mXJ34', test: false, url: 'https://www.ticketmaster.com/charlotte-hornets-vs-…-north-carolina-03-15-2024/event/2D005EF1EEFA6495', …}
18
: 
{name: 'Phoenix Suns vs. Milwaukee Bucks', type: 'event', id: 'G5v0Z9Yc3P8Mr', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-milwa…phoenix-arizona-02-06-2024/event/19005F0B52950DDE', …}
19
: 
{name: 'Phoenix Suns vs. Portland Trail Blazers', type: 'event', id: 'G5v0Z9Yc3T8Bb', test: false, url: 'https://www.ticketmaster.com/phoenix-suns-vs-portl…phoenix-arizona-01-01-2024/event/19005F0B52FD0E98', …}
leng]
```


## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![Desktop View](https://i.imgur.com/0GqxNxT.png)

#### Mobile View

![Mobile View](https://i.imgur.com/Lh0Pwwo.png)


## Schedule of Work

|Day | Goal | What I did accomplish | 
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | API up and running, readme setup, basic plan for development |
| Sun | Build fetch of data in JS file | Figured out the paths to accessing the data I needed |
| Mon | Render data from API on screen | Connect hyperlink, size images |
| Tues| Build form for user to interact with | Made the form functional |
| Wed | wrap up functionality | Change links into buttons, shorten code uning loop function |
|Thurs| mobile layout styling | Developed some frame work for the mobile layout |
| Fri | Desktop layout styling | Restyled header on desktop/mobile layout|
| Sat | Present Project | Entertained all of you for a few minutes, Hope you linked it.|