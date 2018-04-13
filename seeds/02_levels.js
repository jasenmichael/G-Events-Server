const serverUrl = 'https://g-events-api.herokuapp.com'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('levels').del()
    .then(function () {
      // Inserts seed entries
      return knex('levels').insert([
        {
          id: 1,
          name: 'LL',
          landscapeMapUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
          portraitMapUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
        },{
          id: 2,
          name: 'L3',
          landscapeMapUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
          portraitMapUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
        },{
          id: 3,
          name: 'L4',
          landscapeMapUrl: `${serverUrl}/map-images/LL-PlatteFloorLandscapeMap.png`,
          portraitMapUrl: `${serverUrl}/map-images/LL-PlatteFloorPortraitMap.png`
        }
      ]);
    });
};
