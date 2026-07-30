import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import { v4 as uuidv4 } from "uuid";
import { SpinnerRoundFilled } from "spinners-react";
import "./Dashboard.css";

const Dashboard = () => {
  // Búsqueda de pedidos por email
  const [value, setValue] = useState("");
  const [orderUser, setOrderUser] = useState([]);

  // Dashboard
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/orders/ordersdashboard"
        );

        console.log("Datos del dashboard:", res.data);

        setOrders(res.data);
      } catch (err) {
        console.error("Error al cargar dashboard:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  useEffect(() => {
    if (!value) return;

    const fetchOrderByEmail = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/orders/email/${value}`
        );

        setOrderUser(res.data);
      } catch (error) {
        console.error(error);
        setOrderUser([]);
      }
    };

    fetchOrderByEmail();
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.user.value);
  };

  const handleResetDashboard = () => {
    setValue("");
    setOrderUser([]);
  };

  const renderOrders = (list) =>
    list.map((order) => (
      <OrderCard key={order.id_order || uuidv4()} data={order} />
    ));

  if (loading) {
    return (
      <div className="dashboard">
        <SpinnerRoundFilled />
        <p>Cargando pedidos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <h2>Error al cargar los pedidos.</h2>
      </div>
    );
  }

  return (
    <article className="dashboard">
      <section className="user-search">
        <form onSubmit={handleSubmit}>
          <input
            name="user"
            type="email"
            placeholder="Introduce un correo asociado a un pedido"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Escribe una dirección de correo válida"
          />
          <button type="submit">Buscar</button>
        </form>
      </section>

      {value ? (
        <section>
          {orderUser.length > 0 ? (
            <>
              {renderOrders(orderUser)}
              <button
                onClick={handleResetDashboard}
                className="clean-btn"
              >
                Borrar búsqueda
              </button>
            </>
          ) : (
            <p>No se encontraron pedidos para ese correo.</p>
          )}
        </section>
      ) : (
        <section>
          <h2>Pedidos realizados</h2>

          {orders && (
            <>
              <p>
                <strong>Stock:</strong> {orders.stock_kg} kg
              </p>

              {orders.pedidos.length > 0 ? (
                renderOrders(orders.pedidos)
              ) : (
                <p>No hay pedidos registrados.</p>
              )}
            </>
          )}
        </section>
      )}
    </article>
  );
};

export default Dashboard;