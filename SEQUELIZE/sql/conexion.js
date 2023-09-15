const { Sequelize } = require('sequelize');

const conn_sql = new Sequelize('BD_WORTSCHATZ', 'keren', '1234', {
  host: 'localhost',
  port: '1433',
  dialect: 'mssql'
});

conn_sql
    .authenticate()
    .then(() => {
        console.log("si funciono :3");
    })
    .catch((error) => {
        console.log("hubo un error :s ", error);
    })

module.exports = sequelize;