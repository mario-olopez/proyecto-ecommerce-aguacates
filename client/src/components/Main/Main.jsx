import React from "react";
import { Route, Routes } from "react-router-dom";
import Description from "./Description"
import OrderForm from "./OrderForm"
import About from "./About"
import Dashboard from "./Dashboard";

const Main = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Description />}/>
      <Route path="/nuevopedido" element={<OrderForm />}/>
      <Route path="/huertolopez" element={<About />}/>
      <Route path="/ordersdashboard" element={<Dashboard />} />
    </Routes>
  </div>;
};

export default Main;
