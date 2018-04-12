exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "events"; ALTER SEQUENCE events_id_seq RESTART WITH 8;')
    .then(function() {
      return knex('events').insert([
        { 
          id: 1, 
          month: 12,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Colorado Open Source Operating System User Group ",
          registerUrl: "https://www.meetup.com/Colorado-Open-Source-Operating-System-User-Group/",
          time: "Thursday, 6:00pm - 9:00pm MDT",
          category: "Data Science, Web Development",
          description: "",
          floor: "",
          room: ""
        }, 
        {
          id: 2,
          month: "Apr",
          day: 14,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Galvanize Web Development Immersive Basic Training - Denver - 04/14/18 ",
          registerUrl: "https://www.eventbrite.com/e/galvanize-web-development-immersive-basic-training-denver-041418-tickets-44374500325",
          time: "Saturday, 9:00am - 3:00pm MDT",
          category: "Web Development",
          description: "",
          floor: "",
          room: ""
          },
          {
          id: 3,
          month: "Apr",
          day: 15,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Galvanize Denver: 3 Week Javascript Accelerated Course (4/16/18 - 5/3/18) ",
          registerUrl: "https://www.eventbrite.com/e/galvanize-denver-3-week-javascript-accelerated-course-41618-5318-tickets-43940753978",
          time: "",
          category: "Web Development",
          description: "",
          floor: "",
          room: ""
          },
          {
          id: 4,
          month: "Apr",
          day: 17,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Magic: The Gathering | Meetup ",
          registerUrl: "https://www.meetup.com/Galvanic-Blast-Magic-The-Gathering-at-Galvanize/",
          time: "Tuesday, 6:00pm - 8:00pm MDT",
          category: "Community",
          description: "",
          floor: "",
          room: ""
          },
          {
          id: 5,
          month: "Apr",
          day: 17,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Hack the Dot with Name.com ",
          registerUrl: "https://www.eventbrite.com/e/hack-the-dot-galvanize-platte-tickets-44494267552",
          time: "Tuesday, 6:00pm - 9:00pm MDT",
          category: "Web Development",
          description: "",
          floor: "",
          room: ""
          },
          {
          id: 6,
          month: "Apr",
          day: 18,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Learn to Code Learning Series ",
          registerUrl: "https://www.eventbrite.com/e/intro-to-htmlcssjavascript-free-learning-series-beginners-welcome-tickets-41218960019",
          time: "Wednesday, 6:00pm - 8:00pm MDT",
          category: "Web Development",
          description: "",
          floor: "",
          room: ""
          },
          {
          id: 7,
          month: "Apr",
          day: 19,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Boulder/Denver Big Data Meetup ",
          registerUrl: "https://www.meetup.com/Boulder-Denver-Big-Data/",
          time: "Thursday, 6:00pm - 8:30pm MDT",
          category: "Data Science",
          description: "",
          floor: "",
          room: ""
        }
      ]);
    });
};
