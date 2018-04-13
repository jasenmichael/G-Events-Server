const database = require("./database-connection");

module.exports = {
  list() {
    return database("events")
      .select()
  },
  read(id) {
    return database("events")
      .select()
      .where("id", id).first()
  },
  create(events) {
    return database("events")
      .insert(events)
      .returning("*")
      .then(record => record[0])
  },
  update(id, events) {
    return database("events")
      .update(events)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id) {
    return database("events")
      .delete()
      .where("id", id)
  }
}
