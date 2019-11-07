
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl => {
      tbl.increments(); // integer
      tbl.string('name', 255).notNullable();
  })
  .createTable('animals', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();

      //define foreign key
    tbl.integer('species_id')
    .unsigned()
    .references('id')
    .inTable('species') // also integer, no negative values
    .onDelete('RESTRICT') // about what to do deleting record from primary key table
    .onUpdate('CASCADE') // about changing value of primary key
  })

  .createTable('zoos', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('address', 300).notNullable();
  })

  .createTable('animal_zoos', tbl => {
      tbl.increments();
      tbl.integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('zoos')

      tbl.integer('animal_id')
      .unsigned()
      .references('id')
      .inTable('animals')

      tbl.string('from').notNullable();
      
      tbl.string('to')
  })

};

exports.down = function(knex) {
  
};
