import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard"
import { v4 as uuidv4 } from "uuid";
import "./Dashboard.css";

const Dashboard = () => {
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

  const renderOrders = () => orders.pedidos.map((order, i) => <OrderCard key={uuidv4()} data={order} />)

  return (
    <div className="dashboard">
      {orders?.pedidos?.length>0?renderOrders():<p>Cargando pedidos..</p>}
    </div>
  );
};

export default Dashboard;

