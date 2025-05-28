const express = require('express');
const router = require("express").Router()
const orderController = require("../controllers/order.controller")


//Ruta para crear nuevo pedido
//http://localhost:3000/api/orders
router.post("/", orderController.createOrder)

//Ruta para obtener pedido por email
//http://localhost:3000/api/email/:email
router.get("/email/:email", orderController.getOrdersByEmail)

//Ruta para obtener todos los pedidos
//http://localhost:3000/api/ordersdashboard
router.get("/ordersdashboard", orderController.getAllOrders)

//Ruta para actualizar estado del pedido por id
router.put("/:id/state", orderController.updateOrderState)

module.exports = router