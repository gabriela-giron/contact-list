const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const conn_sql = new Sequelize('BD_WORTSCHATZ', 'keren', '1234', {
  host: 'localhost',
  dialect: mssql
});

try {
  await conn_sql.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}