import express, { request, response } from 'express';

const routes = express.Router();

routes.get('/', (req, res)=>{
  return response.json({message: 'cole again'});
});

export default routes;