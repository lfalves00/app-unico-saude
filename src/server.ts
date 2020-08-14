import express, { request } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send({message: 'cole amigos'})
});

app.listen(3333);
