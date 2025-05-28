import React, { useState } from "react";
import "./Calculator.css"

const Calculator = () => {

  const [kilos, setKilos] = useState(6)

  const kiloPrice = 4;
  const shippingPrice = 16;
  const totalPrice = kilos * kiloPrice + shippingPrice

  const add = () => {
    setKilos(kilo => kilo + 1)
  }

  const subtract = () => {
    if (kilos > 6) setKilos(kilo => kilo - 1)
  }

  return <div className="calculator">
    <h2>Calcula tu pedido</h2>
    <p>El precio de nuestros aguacates es de 4€/kg y el pedido mínimo es de 6kg. 
      Abajo puedes calcular el coste total de tu pedido con los gastos de envío incluídos.
    </p>

    <div className="counter">
      <button onClick={subtract}>−</button>
      <span>{kilos} kg</span>
      <button onClick={add}>+</button>
    </div>

      <p><strong>Precio de tu pedido:</strong> <input value={totalPrice} readOnly></input>€</p>
      <a href="/nuevopedido">Haz click aquí si quieres realizar tu pedido</a>

  </div>;
};

export default Calculator;
