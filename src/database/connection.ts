import knex from 'knex';
import path from 'path'; // library padrao do node para unir caminhos padronizando para diferentes OS

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault:true,
})

export default connection;

// Migrations = historico do BD
// 