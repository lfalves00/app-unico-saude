import Knex from "knex";

import knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('locals', table =>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('tellphone').notNullable();
    table.string('uf', 2).notNullable();
    table.string('city').notNullable(); 
    table.string('hood').notNullable(); 

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('locals');
}