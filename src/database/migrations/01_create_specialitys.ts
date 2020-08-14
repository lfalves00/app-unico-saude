import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('specialitys', table =>{
    table.increments('id').primary();
    table.string('title').notNullable(); 

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('specialitys');
}