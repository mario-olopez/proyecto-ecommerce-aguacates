import React, { useEffect, useState } from "react";
import "./OrderCard.css"
import axios from "axios";

const OrderCard = ({data: { name, surname, email, address, phone, payment, state, amount, id_order } }) => {

  //Endpoint para cambiar el estado del pedido --> http://localhost:3000/api/orders/:id/state

  const [paymentState, setPaymentState] = useState(state)

  const handleChangeState = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id_order}/state`);
      if (res.status === 200){
        setPaymentState("pagado")
      }
    } catch(error){
      console.error("Error al cambiar el estado", error)
    }
  };


  return <article className="order-card">
    <div className="title-card">
      <h2>Detalles del pedido de {email}</h2>
    </div>
    <div className="data-card">
      <h3>Identificador del pedido: {id_order}</h3>
      <h3>Nombre: <b>{name}</b></h3>
      <h3>Apellidos: <b>{surname}</b></h3>
      <h3>Dirección: <b>{address}</b></h3>
      <h3>Móvil: <b>{phone}</b></h3>
      <h3>Cantidad: <b>{amount}kilos</b></h3>
      <h3>Pago: <b>{payment}</b>€</h3>
      <h3>Estado del pago: <b>{paymentState}</b></h3>
      {paymentState === "pendiente" && (
        <button onClick={handleChangeState}>Cambiar estado</button>
      )}
    </div>

  </article>;
};

export default OrderCard;
