const aguacatesStock = require('../models/aguacates.model');

const getStock = async (req, res) => {
  try {
    const stock = await aguacatesStock.getStock();
    res.status(200).json(stock);
  } catch (error) {
    console.error('Error al obtener el stock:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  getStock
};