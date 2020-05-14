const Sequelize = require('sequelize')

const sequelize = require('../util/database')

//products : [], totalPrice: 0
//{ id: id, qty:1 }
const OrderItem = sequelize.define('orderItem' , {
    id: { 
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
})

module.exports = OrderItem
