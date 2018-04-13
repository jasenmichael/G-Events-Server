const database = require("./database-connection");

module.exports = {
  list() {
    return database("event")
      .select()
  },
  read(id) {
    return database("event")
      .select()
      .where("id", id).first()
  },
  create(event) {
    return database("event")
      .insert(event)
      .returning("*")
      .then(record => record[0])
  },
  update(id, event) {
    return database("event")
      .update(event)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id) {
    return database("event")
      .delete()
      .where("id", id)
  }
}
