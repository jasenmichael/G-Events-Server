const express = require('express')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

const events = require("./routes/events");
const rooms = require("./routes/rooms");


const url = 'https://www.galvanize.com/denver-platte/events'


app.use(cors())
app.use(morgan('dev'))
app.use('/map-images', express.static('map-images'))

app.get('/events', (req, res) => {
  listEvents()
    .then(events => {
      res.json(events)
    })
})

app.get('/maps', (req, res) => {
  res.json(maps)
})

function listEvents() {
  return fetch(url)
    .then(res => res.text())
    .then(body => {
      const events = []
      const $ = cheerio.load(body)
      $('.event-card').each(function(i, element) {
        const $element = $(element)
        const $location = $element.find('.location a').text()
        if ($location == 'Platte') {
          const $month = $element.find('.month').text()
          const $day = $element.find('.day').text()
          const $title = $element.find('.title').text()
          const $time = $element.find('.time').text()
          const $category = $element.find('.category').text()
          const $locationUrl = $element.find('.location a').attr('href')
          const $registerUrl = $element.find('.event-button').attr('href')
          const $description = $element.find('.description').text()
          const event = {
            month: $month,
            day: $day,
            location: $location,
            locationUrl: $locationUrl,
            title: $title,
            registerUrl: $registerUrl,
            time: $time,
            category: $category,
            description: $description,
            floor: '',
            room: ''
          }
          events.push(event)
        }
      })
      return events
    })
}

// const serverUrl = "http://localhost:3000"
const serverUrl = "http://g-events-api.herokuapp.com"
const maps = [{
          LL: {
            landscapeMapUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
            portraitMapUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`,
            rooms: [{
              id: 1,
              level: "LL"
              name: "Classroom 1",
              roomMapLandscapeUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
            }, {
              id: 2,
              level: "LL",
              name: "Classroom 2",
              roomMapLandscapeUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
            }, {
              id: 3,
              level: "LL",
              name: "Classroom 3",
              roomMapLandscapeUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
            }]
          },

          L3: {
            landscapeMapUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
            portraitMapUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`,
            rooms: [{
              id: 1,
              level: "L3",
              name: "some room 1 on the 3rd floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`
            }, {
              id: 2,
              level: "L3",
              name: "some room 2 on the 3rd floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`
            }, {
              id: 3,
              level: "L3",
              name: "some room 3 on the 3rd floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`
            }]
          },

          L4: {
            landscapeMapUrl: `${serverUrl}/map-images/L4-PlatteFloorLandscapeMap.png`,
            portraitMapUrl: `${serverUrl}/map-images/L4-PlatteFloorPortraitMap.png`,
            rooms: [{
              id: 1,
              level: "L4",
              name: "some room 1 on the 4th floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L4-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L4-PlatteFloorPortraitMap.png`
            }, {
              id: 2,
              level: "L4",
              name: "some room 2 on the 4th floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L4-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L4-PlatteFloorPortraitMap.png`
            }, {
              id: 3,
              level: "L4",
              name: "some room 3 on the 4th floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L4-PlatteFloorMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L4-PlatteFloorPortraitMap.png`
            }]
          }

        }]

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('listening on ' + port)
})
