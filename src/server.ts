import fastify from 'fastify';
import { knex } from './database';

const app = fastify();

app.get('/hello', async (req, res) => {
  const transactions = await knex('transactions')
    .where('amount', 500)
    .select('*');

  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
