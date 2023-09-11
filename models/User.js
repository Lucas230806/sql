const { DataTypes } = require("Sequelize");
const db = require('../db/conn')
/**
 * create table user(
 * nome varchar(255) not null
 * cargo varchar(255) not null
 * newsletter bool
 * );
 */

const User = db.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation:{
        type: DataTypes.STRING,
        require: true
    },
    newsletter:{
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User