const database = require("./database-connection");

module.exports = {
  list() {
    return database("room")
      .select()
  },
  read(id) {
    return database("room")
      .select()
      .where("id", id).first()
  },
  create(room) {
    return database("room")
      .insert(room)
      .returning("*")
      .then(record => record[0])
  },
  update(id, room) {
    return database("room")
      .update(room)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id) {
    return database("room")
      .delete()
      .where("id", id)
  }
}
