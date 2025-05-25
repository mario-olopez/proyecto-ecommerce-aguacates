const express = require('express');
const router = require("express").Router()
const orderController = require("../controllers/order.controller")


//Ruta para crear nuevo pedido
router.post("/", orderController.createOrder)

//Ruta para obtener pedido por id
router.get("/email/:email", orderController.getOrdersByEmail)

module.exports = router