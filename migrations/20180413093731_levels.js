
exports.up = function(knex, Promise) {
    return knex.schema.createTable('levels', table => {
        table.increments('id').primary()
        table.text('name')
        table.text('landscapeMapUrl')
        table.text('portraitMapUrl')
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('levels')

};
