const express = require('express')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const cors = require('cors')

const url = 'https://www.galvanize.com/denver-platte/events'

const app = express()
app.use(cors())


app.get('/', (req, res) => {
  listEvents()
  .then(events => {
    res.json(events)
  })
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
          Day: $day,
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

const port = process.env.PORT || 3000
app.listen(port, () =>{
  console.log('listening on ' + port)
})
