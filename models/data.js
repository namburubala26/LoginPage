const { DataTypes } = require('sequelize')
const sequelize = require('../util/dataBase')

const Login = sequelize.define('Login',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:DataTypes.INTEGER,
        allowNull:false 
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Login