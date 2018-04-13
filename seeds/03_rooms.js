
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "rooms"; ALTER SEQUENCE rooms_id_seq RESTART WITH 10;')
    .then(function () {
      return knex('rooms').insert([
        {
            id: 1, 
            name: 'Classroom 1',
            roomMapLandscapeUrl: 'http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorLandscapeMap.png',
            roomMapPortraitUrl: 'http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorPortraitMap.png',
            level: 'LL'
        }, {
            id: 2,
            name: "Classroom 2",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorPortraitMap.png",
            level: 'LL'
          },{
            id: 3,
            name: "Classroom 3",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/LL-PlatteFloorPortraitMap.png",
            level: 'LL'
          },{
            id: 4,
            name: "Sonic",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorPortraitMap.png",
            level: 'L3'
          },{
            id: 5,
            name: "1 Up",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorPortraitMap.png",
            level: 'L3'
          },{
            id: 6,
            name: "Data Science Classroom",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/L3-PlatteFloorPortraitMap.png",
            level: 'L3'
          },{
            id: 7,
            name: "Atrium",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorPortraitMap.png",
            level: 'L4'
          },{
            id: 8,
            name: "Mega Man",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorLandscapeMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorPortraitMap.png",
            level: 'L4'
          },{
            id: 9,
            name: "Gold Coin",
            roomMapLandscapeUrl: "http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorMap.png",
            roomMapPortraitUrl: "http://g-events-api.herokuapp.com/map-images/L4-PlatteFloorPortraitMap.png",
            level: 'L4'
          }
      ]);
    });
};
