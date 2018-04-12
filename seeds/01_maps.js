const serverUrl = 'g-events-api.herokuapp.com'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('maps').del()
    .then(function () {
      // Inserts seed entries
      return knex('maps').insert([{
        
          LL: {
            landscapeMapUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
            portraitMapUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`,
            rooms: [{
              id: 1,
              name: "Classroom 1",
              roomMapLandscapeUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
            }, {
              id: 2,
              name: "Classroom 2",
              roomMapLandscapeUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
            }, {
              id: 3,
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
              name: "some room 1 on the 3rd floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`
            }, {
              id: 2,
              name: "some room 2 on the 3rd floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`
            }, {
              id: 3,
              name: "some room 3 on the 3rd floor",
              roomMapLandscapeUrl: `${serverUrl}/map-images/L3-PlatteFloorLandscapeMap.png`,
              roomMapPortraitUrl: `${serverUrl}/map-images/L3-PlatteFloorPortraitMap.png`
            }]
          }
        }        
      ]);
    });
};
