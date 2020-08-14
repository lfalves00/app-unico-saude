import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('local_specialitys', table =>{
    table.increments('id').primary();
    table.integer('local_id')
      .notNullable()
      .references('id')
      .inTable('locals');

    table.integer('speciality_id')
      .notNullable()
      .references('id')
      .inTable('specialitys');
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('local_specialitys');
}