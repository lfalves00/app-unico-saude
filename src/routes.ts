import express, { request, response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/specialitys', async (request, response) => {
  const specialitys = await knex('specialitys').select('*');

  return response.json(specialitys);
});

routes.post('/locals', async (request, response) => {
  const {
    name,
    email,
    tellphone,
    uf,
    city,
    hood,
    specialitys
  } = request.body; 

  await knex('locals').insert({
    image: 'image-fake',
    name,
    email,
    tellphone,
    uf,
    city,
    hood
  });

  return response.json({success: true});
});

export default routes;