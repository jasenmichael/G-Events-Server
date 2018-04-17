exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "events"; ALTER SEQUENCE events_id_seq RESTART WITH 8;')
    .then(function() {
      return knex('events').insert([
        {
          id: 1,
          month: "December",
          day: 14,
          location: "Platte",
          locationUrl: "https://www.galvanize.com/campuses/denver-platte",
          title: " Colorado Open Source Operating System User Group ",
          registerUrl: "https://www.meetup.com/Colorado-Open-Source-Operating-System-User-Group/",
          time: "Thursday, 6:00pm - 9:00pm MDT",
          category: "Data Science, Web Development",
          description: "The official Denver Open Source Operating System User Group, held each month at Galvanize Denver Platte",
          floor: "L3",
          room: "Data Science Classroom"
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
          description: "Do you want to learn to code but don’t know where to start? Have you done online tutorials that don’t make sense? Thinking about a career change into Web Development and want to see what coding is all about? Interested to experience what it’s like to be a Galvanize student for a day?! Join us for the FREE HTML/CSS/JavaScript Basic Training at Galvanize on Saturday, April 14th taught by professional instructors.",
          floor: "LL",
          room: "Classroom 2"
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
          description: "If you’re considering a career in Web Development or just looking to level up your current skills, this is the perfect place to start. Tried online tutorials with no success? Galvanize’s proven hands-on and community driven approach to Web Development education ensures thorough understanding of JavaScript’s core concepts every step of the way!",
          floor: "LL",
          room: "Classroom 2"
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
          description: "Come play some casual games of Magic: The Gathering at Galvanize Platte with a group of beginners and intermediate wizards. Bring your own decks and cards, or borrow some of ours. BYOB or you can get a drink at the bar (Gather). We plan to play Standard, Modern, EDH/Commander, and also do some Drafts or Sealed games. All very casual, so bring anything and anyone (Legacy, Vintage, etc. all welcome).",
          floor: "L4",
          room: "Atrium"
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
          description: "A Hack the Dot is a two-hour hackathon where coding school students, junior developers, experienced developers, non developers, marketers, designers, and those with little or no computer programming skill come together to build ideas around a single domain name.",
          floor: "LL",
          room: "Classroom 2"
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
          description: "It's back for the new year! The Learning Series is back and it's here to stay for 2018. We’ve built an incredible curriculum, created resources, and made learning interactive. This learning series format combine breakout sessions, formalized instruction, and group learning to enable to grasp the skills necessary to become a web developer.",
          floor: "LL",
          room: "Classroom 2"
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
          description: "Come learn and/or share your experiences with NoSQL & Big Data technologies. No experience required.",
          floor: "L3",
          room: "Data Science Classroom"
        }
      ]);
    });
};
