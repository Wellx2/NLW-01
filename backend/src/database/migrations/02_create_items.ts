import Knex from 'knex';

export async function up(knex: Knex){
 // create table
  return knex.schema.createTable('items', table =>{
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image').notNullable();
  });

}

export async function down(knex: Knex){
  // Go back (delete table);
  return knex.schema.dropTable('items');
}