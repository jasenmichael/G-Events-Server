# G-Events and Maps api

```
npm install
npm run dev
```
events endpoint:

[localhost:3000/events](localhost:3000/events)

----

maps endpoint:

[localhost:3000/maps](localhost:3000/maps)

----

rooms endpoint:

[localhost:3000/rooms](localhost:3000/rooms)

----

# server scope:

## phase one

create express api endpoint

-   [x] build scraper
-   [x] scrape events data
-   [x] create api end point
-   [x] return events data as json
-   [x] deploy

## phase two

-   [x] discuss /maps response structure so we can build the db to reflect this structure.
-   [ ] create db gevents
-   [ ] create events migration and test seed(so we start with data in the db),
-   [ ] create maps migration and seed floors array of rooms objects.

```
            maps: [{
              LL: {
                mapUrl: `${serverUrl}/map-images/LL-PlatteFloorMap.png`,
                rooms: [{
                  id: 1,
                  name: "Classroom 1",
                  roomMapUrl: "./images/LL-<room-id>-PlatteFloorMap.png"
                }, {
                  id: 2,
                  name: "<room name here>",
                  roomMapUrl: "./images/LL-<room-id>-PlatteFloorMap.png"
                }, {
                  id: 3,
                  name: "<room name here>",
                  roomMapUrl: "./images/LL-<room-id>-PlatteFloorMap.png"
                }]
              },

              L3: {
                mapUrl: `${serverUrl}/map-images/L3-PlatteFloorMap.png`,
                rooms: [{
                  id: 1,
                  name: "<room name here>",
                  roomMapUrl: "./images/L1-<room-id>-PlatteFloorMap.png"
                }, {
                  id: 2,
                  name: "<room name here>",
                  roomMapUrl: "./images/L1-<room-id>-PlatteFloorMap.png"
                }, {
                  id: 3,
                  name: "<room name here>",
                  roomMapUrl: "./images/L1-<room-id>-PlatteFloorMap.png"
                }]
              },

              L4: {
                mapUrl: `${serverUrl}/map-images/L4-PlatteFloorMap.png`,
                rooms: [{
                  id: 1,
                  name: "<room name here>",
                  roomMapUrl: "./images/L1-<room-id>-PlatteFloorMap.png"
                }, {
                  id: 2,
                  name: "<room name here>",
                  roomMapUrl: "./images/L1-<room-id>-PlatteFloorMap.png"
                }, {
                  id: 3,
                  name: "<room name here>",
                  roomMapUrl: "./images/L1-<room-id>-PlatteFloorMap.png"
                }]
              }
           }]
```

-   [ ] create CRUD routes and queries for /events and /maps.
-   [ ] change events route to /events
-   [ ] sync the scraped data

todo:

-   [ ] list rooms for each floor

## front-end coordination

-   [ ] build maps component and link to /maps route
  -   [ ] build map with image component
  -   [ ] build floors component (LL, L3, L4 selectors)
  -   [ ] build rooms component (dropdown list)
    * logic: will change the image to selected floor or room.

-   [ ] build
