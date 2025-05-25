const express = require('express');
const router = require("express").Router()
const orderController = require("../controllers/order.controller")


//Ruta para crear nuevo pedido
router.post("/", orderController.createOrder)

//Ruta para obtener pedido por id
//http://localhost:3000/api/email/
router.get("/email/:email", orderController.getOrdersByEmail)

//Ruta para obtener todos los pedidos
//http://localhost:3000/api/ordersdashboard
router.get("/ordersdashboard", orderController.getAllOrders)

module.exports = router