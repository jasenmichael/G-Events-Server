# G-Events and Maps api

```
npm install
npm run dev
```
events endpoint:

[localhost:3000](localhost:3000)

maps endpoint:

[localhost:3000/maps](localhost:3000/maps)

---

# server scope:

## phase one

create express api endpoint

-   [x] build scraper
-   [x] scrape events data
-   [x] create api end point
-   [x] return events data as json
-   [x] deploy

## phase two

-   [ ] create db,
-   [ ] create events migration and test seed(so we start with data in the db),
-   [ ] create maps migration and seed floors array of rooms objects.

```
            maps: [{
              LL: {
                mapUrl: `${serverUrl}/map-images/LL-PlatteFloorMap.png`,
                rooms: [{
                  id: 1,
                  name: "<room name here>",
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

-   [ ] create CRUD routes and queries.
-   [ ] list list events /events
-   [ ]

-   [ ] sync the scraped data

-   [ ]
