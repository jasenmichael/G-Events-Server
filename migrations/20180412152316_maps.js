
exports.up = function(knex, Promise) {
    return knex.schema.createTable('maps', table => {
        table.increments('id').primary()
        table.text('LL')
        table.text('L3')
        table.text('L4')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('maps')
  
};
