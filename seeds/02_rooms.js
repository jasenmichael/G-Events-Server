
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "rooms"; ALTER SEQUENCE rooms_id_seq RESTART WITH 10;')
    .then(function () {
      return knex('rooms').insert([
        {
            id: 1,
            name: 'Classroom 1',
            roomMapLandscapeUrl: './assets/maps/classroom-1-LandscapeMap.png',
            roomMapPortraitUrl: './assets/maps/classroom-1-PortraitMap.png',
            level: 'LL'
        }, {
            id: 2,
            name: "Classroom 2",
            roomMapLandscapeUrl: "./assets/maps/classroom-2-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/classroom-2-PortraitMap.png",
            level: 'LL'
          },{
            id: 3,
            name: "Classroom 3",
            roomMapLandscapeUrl: "./assets/maps/classroom-3-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/classroom-3-PortraitMap.png",
            level: 'LL'
          },{
            id: 4,
            name: "Sonic",
            roomMapLandscapeUrl: "./assets/maps/sonic-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/sonic-PortraitMap.png",
            level: 'L3'
          },{
            id: 5,
            name: "1 Up",
            roomMapLandscapeUrl: "./assets/maps/1-up-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/1-up-PortraitMap.png",
            level: 'L3'
          },{
            id: 6,
            name: "Data Science Classroom",
            roomMapLandscapeUrl: "./assets/maps/data-science-classroom-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/data-science-classroom-PortraitMap.png",
            level: 'L3'
          },{
            id: 7,
            name: "Atrium",
            roomMapLandscapeUrl: "./assets/maps/atrium-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/atrium-PortraitMap.png",
            level: 'L4'
          },{
            id: 8,
            name: "Mega Man",
            roomMapLandscapeUrl: "./assets/maps/mega-man-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/mega-man-PortraitMap.png",
            level: 'L4'
          },{
            id: 9,
            name: "Gold Coin",
            roomMapLandscapeUrl: "./assets/maps/gold-coin-LandscapeMap.png",
            roomMapPortraitUrl: "./assets/maps/gold-coin-PortraitMap.png",
            level: 'L4'
          }
      ]);
    });
};
