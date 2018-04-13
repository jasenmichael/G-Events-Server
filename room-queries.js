const database = require("./database-connection");

module.exports = {
  list() {
    return database("rooms")
      .select()
  },
  read(id) {
    return database("rooms")
      .select()
      .where("id", id).first()
  },
  create(room) {
    return database("rooms")
      .insert(room)
      .returning("*")
      .then(record => record[0])
  },
  update(id, room) {
    return database("rooms")
      .update(room)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id) {
    return database("rooms")
      .delete()
      .where("id", id)
  }
}
