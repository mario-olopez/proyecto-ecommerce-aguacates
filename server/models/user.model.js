const pool = require('../config/db_pgsql');
const queries = require('../queries/api.queries');

const findOrCreateUser = async ({ name, surname, email, address, phone }) => {
  const existing = await pool.query(queries.findUserByEmail, [email]);

  if (existing.rows.length > 0) {
    return existing.rows[0];
  }

  const insert = await pool.query(queries.insertUser, [name, surname, email, address, phone]);
  return insert.rows[0];
};

module.exports = {
  findOrCreateUser
};
