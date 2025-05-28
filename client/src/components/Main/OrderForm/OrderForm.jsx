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
      
      Swal.fire({
        title: "¡Formulario enviado con éxito!",
        text: "Recuerda realizar el pago por Bizum para confirmar el pedido",
        imageUrl: "/aguacate-enviado.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Aguacate feliz"
      });

      setOrder({
        name: "",
        surname: "",
        email: "",
        address: "",
        phone: "",
        amount: "",
        payment: ""
      })

    } catch(error){
      console.error(error);
      
      Swal.fire({
        title: "¡Ups! Se ha producido un error",
        text: "Revisa que hayas completado el formulario correctamente",
        imageUrl: "/aguacate-triste.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Aguacate triste"
      })
    }
  }

  return <div className="order-div">
    <h2>Completa el formulario para realizar tu pedido</h2>

    <form onSubmit={handleSubmit} className="order-form">
      <label>Nombre:</label>
      <input type="text" name="name" value={order.name} onChange={handleChange} required pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$" title="Debe contener al menos dos letras"></input><br />

      <label>Apellidos:</label>
      <input type="text" name="surname" value={order.surname} onChange={handleChange} required pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$" title="Debe contener al menos dos letras"></input><br />

      <label>Email:</label>
      <input type="email" name="email" value={order.email} onChange={handleChange} required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Escribe una dirección de correo válida"></input><br />

      <label>Dirección:</label>
      <input type="text" name="address" value={order.address} onChange={handleChange} required pattern=".{5,}" title="Escribe una dirección existente"></input><br />

      <label>Número de móvil:</label>
      <input type="tel" name="phone" value={order.phone} onChange={handleChange} required pattern="^[6-7]{1}[0-9]{8}$" title="El móvil debe ser de España"></input><br />

      <label>¿Cuántos kilos quieres?</label>
      <input type="number" name="amount" value={order.amount} onChange={handleChange} min="6" max="40" required></input><br />

      <label>El precio (€) de tu pedido es:</label>
      <input type="number" name="payment" value={order.payment} placeholder="€" readOnly></input><br />

      <button type="submit" disabled={!order.payment}>Realizar pedido</button>

      <div className="bizum-payment">
        <h3>Realiza el pago por Bizum a través de este QR</h3>
        <h3>En el asunto escribe: "Pedido aguacates" + "tu correo electrónico"</h3>
        <img src="/qr-bizum.png" alt="QR para realizar Bizum"/>
      </div>

    </form>

  </div>;
};

export default OrderForm;
