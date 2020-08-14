import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('cpf', 11).unique().notNullable();
    table.string('plano').notNullable();
    table.string('email').unique().notNullable();
    table.boolean('validity').notNullable();
    table.date('expire').notNullable();
    
    table.integer('level_id')
    .notNullable()
    .references('id')
    .inTable('levels');

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}