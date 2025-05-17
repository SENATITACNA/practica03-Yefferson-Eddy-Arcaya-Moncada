const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3307,
  user: 'yefferson20',
  password: 'yeff2005',
  database: 'crud_node'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;
