require('dotenv').load();

module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///gevents"
  },
  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
}