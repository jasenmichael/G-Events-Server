const serverUrl = 'https://g-events-api.herokuapp.com'

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "levels"; ALTER SEQUENCE levels_id_seq RESTART WITH 4;')
    .then(function () {
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
