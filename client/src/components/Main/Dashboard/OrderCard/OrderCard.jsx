import React from "react";
import "./OrderCard.css"

const OrderCard = ({data: { name, surname, email, address, phone, payment, state, amount }}) => {
  return <article className="order-card">
    <div className="title-card">
      <h2>Detalles del pedido de {email}</h2>
    </div>
    <div className="data-card">
      <h3>Nombre: <b>{name}</b></h3>
      <h3>Apellidos: <b>{surname}</b></h3>
      <h3>Dirección: <b>{address}</b></h3>
      <h3>Móvil: <b>{phone}</b></h3>
      <h3>Cantidad: <b>{amount}kilos</b></h3>
      <h3>Pago: <b>{payment}</b>€</h3>
      <h3>Estado del pago: <b>{state}</b></h3>
      <button>Cambiar estado</button>
    </div>

  </article>;
};

export default OrderCard;
