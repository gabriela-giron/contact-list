const sequelize = require('./sql/conexion');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize_memory = new Sequelize('mssql::memory:');

class wortschatz extends Model {}

wortschatz.init({
  // Model attributes are defined here
  artikel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  wort: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bedeutung: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ubersetzung: {
    type: DataTypes.STRING,
    allowNull: false
  },
  satz: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bild: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  // Other model options go here
  //conection instance
  sequelize, // We need to pass the connection instance
  modelName: 'wortschatz'
});

// `sequelize.define` also returns the model
console.log(wortschatz === sequelize_memory.models.wortschatz); // true