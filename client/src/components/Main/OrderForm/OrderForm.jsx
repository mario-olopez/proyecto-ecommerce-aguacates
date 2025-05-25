import React, { useState } from "react";
import axios from "axios"
import Swal from 'sweetalert2';
import "./OrderForm.css"

const OrderForm = () => {

  const [order, setOrder] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    phone: "",
    amount: "",
    payment: ""
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const {name, value} = e.target;

    const updatedOrder = {
      ...order,
      [name]: value
    }

    if(name === "amount"){
      const kilos = parseInt(value)
      if(!isNaN(kilos) && kilos >= 6) {
        updatedOrder.payment = kilos * 4 + 16;
      } else {
        updatedOrder.payment = "";
      }
    }
    setOrder(updatedOrder)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.post("http://localhost:3000/api/orders", order);
      console.log(res.data)
      setMessage("Pedido realizado con éxito")
    } catch(error){
      console.error(error);
      setMessage("Error al realizar el pedido")
    }
  }

  return <div className="order-div">
    <h2>Completa el formulario para realizar tu pedido</h2>

    <form onSubmit={handleSubmit} className="order-form">
      <label>Nombre:</label>
      <input type="text" name="name" value={order.name} onChange={handleChange} required></input><br />

      <label>Apellidos:</label>
      <input type="text" name="surname" value={order.surname} onChange={handleChange} required></input><br />

      <label>Email:</label>
      <input type="email" name="email" value={order.email} onChange={handleChange} required></input><br />

      <label>Dirección:</label>
      <input type="text" name="address" value={order.address} onChange={handleChange} required></input><br />

      <label>Número de móvil:</label>
      <input type="tel" name="phone" value={order.phone} onChange={handleChange} required></input><br />

      <label>¿Cuántos kilos quieres?</label>
      <input type="number" name="amount" value={order.amount} onChange={handleChange} min="6" required></input><br />

      <label>El precio (€) de tu pedido es:</label>
      <input type="number" name="payment" value={order.payment} placeholder="€" readOnly></input><br />

      <button type="submit" disabled={!order.payment}>Realizar pedido</button>
    </form>

    {message && <p>{message}</p>}

  </div>;
};

export default OrderForm;
