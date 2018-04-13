
exports.up = function(knex, Promise) {
    return knex.schema.createTable('rooms', table => {
        table.increments('id').primary()
        table.text('name')
        table.string('roomMapLandscapeUrl')
        table.string('roomMapPortraitUrl')
        table.string('level')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('rooms')
};
