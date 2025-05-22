const order = require("../models/order.model")
const user = require("../models/user.model")

const createOrder = async (req, res) => {
    try {
        const { name, surname, email, address, phone, amount, payment } = req.body;

        if(!name || !surname || !email || !address || !phone || !amount || !payment) {
            return res.status(400).json({ message: "Rellena todos los datos del pedido"})
        }

        const existUser = await user.findOrCreateUser({name, surname, email, address, phone})

        const newOrder = await order.createOrder({
            id_user: existUser.id_user, 
            amount, 
            payment})

        res.status(201).json({
            message: "Pedido creado con éxito",
            order: newOrder,
        })
    } catch (error){
        console.error("Error al realizar el pedido: ", error)
        res.status(500).json({message: "Error en el servidor"})
    }
}

const getOrdersByEmail = async (req, res) => {
    try{
        const {email} = req.params;
        const orders = await order.getOrdersByEmail(email)

        if(orders.length === 0){
            return res.status(400).json({ message: "No existen pedidos realizados con ese correo"})
        }
    } catch (error){
        console.error("Error al obtener el pedido: ", error);
        res.status(500).json({message: "Error en el servidor"})
    }
}

module.exports = {
    createOrder,
    getOrdersByEmail
}