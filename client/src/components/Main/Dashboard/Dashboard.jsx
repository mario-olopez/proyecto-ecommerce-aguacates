import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard"
import { v4 as uuidv4 } from "uuid";
import { SpinnerRoundFilled } from 'spinners-react';
import "./Dashboard.css";

const Dashboard = () => {

  //Búsqueda de pedido por email
  const [value, setValue] = useState("" || null)
  const [orderUser, setOrderUser] = useState([])

  useEffect(() => {
    if(!value) return;

    async function fetchOrderByEmail(){
      try {
        const res = await axios.get(`http://localhost:3000/api/orders/email/${value}`)
        setOrderUser(res.data)
      } catch(error){
        console.error(error)
        setOrderUser([]);
      }
    }
    fetchOrderByEmail()
  }, [value])

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.user.value)
    setValue(e.target.user.value)
  };

  const handleResetDashboard = () => {
    setValue("");
    setOrderUser([])
  }

  //Llamada a la api para traer todos los pedidos
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/orders/ordersdashboard");
        console.log("Datos del dashboard:", res.data);
        setOrders(res.data);
      } catch (err) {
        console.error("Error al cargar dashboard", err);
      }
    };

    fetchDashboard();
  }, []);

  const renderOrders = (list) => list.map(order => <OrderCard key={uuidv4()} data={order} />)


  return (
    <article className="dashboard">
  
      <section className="user-search">
        <form onSubmit={handleSubmit}>
          <input name="user" 
            placeholder="Introduce un correo asociado a un pedido" 
            type="email" 
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" 
            title="Escribe una dirección de correo válida"/>
          <button type="submit">Buscar</button>
        </form>
      </section>
  
      {value ? (
        <section>
          <div>
  
            {orderUser.length > 0 ? (
              <>
                {renderOrders(orderUser)}
                <button onClick={handleResetDashboard} className="clean-btn">Borrar búsqueda</button>
              </>
            ) : (
              <SpinnerRoundFilled />
            )}
          </div>
        </section>
      ) : (
        <section>
          {orders?.pedidos?.length > 0 ? (
            renderOrders(orders.pedidos)
          ) : (
            <p> <SpinnerRoundFilled /> Cargando pedidos...</p>
          )}
        </section>
      )}
  
    </article>
  )}

export default Dashboard;

