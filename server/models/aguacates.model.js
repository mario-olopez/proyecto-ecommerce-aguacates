const pool = require('../config/db_pgsql');
const queries = require('../queries/api.queries');

const getStock = async () => {
  const result = await pool.query(queries.getStock);
  return result.rows[0];
};

module.exports = {
  getStock
};
