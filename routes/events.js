const express = require('express')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = express.Router();

const queries = require('../event-queries');

// read
const url = 'https://www.galvanize.com/denver-platte/events'
router.get("/", (request, response, next) => {
  queries.list().then(events => {
    console.log(events);
    response.json(events);
  }).catch(next);
});

router.get("/add", (request, response, next) => {
  listEvents().then(events => {
      response.json(events)
      console.log(events);
    }).catch(next);
});

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

// read
router.get("/:id", (request, response, next) => {
  queries.read(request.params.id).then(event => {
    event
      ?
      response.json({
        event
      }) :
      response.status(404).json({
        message: 'Not found'
      })
  }).catch(next);
});

router.post("/", (request, response, next) => {
  queries.create(request.body).then(event => {
    response.status(201).json({
      event
    });
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({
      deleted: true
    });
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update(request.params.id, request.body).then(event => {
    response.json({
      event
    });
  }).catch(next);
});







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






module.exports = router;
