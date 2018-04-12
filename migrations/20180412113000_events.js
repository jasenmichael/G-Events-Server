
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', table => {
        table.increments('id').primary()
        table.text('month')
        table.integer('day')
        table.string('location')
        table.string('locationUrl')
        table.text('title')
        table.string('registerUrl', 500)
        table.string('time')
        table.string('category')
        table.text('description')
        table.text('floor')
        table.text('room')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('events')
  
};
