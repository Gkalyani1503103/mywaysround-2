const {Sequelize} = require('Sequelize');

const sequelize = require('../util/database');

const books = sequelize.define('books',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    title : {
        type : Sequelize.STRING,
        allowNull: false
    },
    author : {
        type : Sequelize.STRING,
        allowNull:false
    },
    year : {
        type : Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = books