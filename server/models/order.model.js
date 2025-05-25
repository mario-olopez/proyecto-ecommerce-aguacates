const pool = require("../config/db_pgsql");
const queries = require("../queries/api.queries")

const createOrder = async ({ id_user, amount, payment }) => {
    let client, result;

    try {
        client = await pool.connect();
        const orderData = await client.query(queries.insertOrder, [id_user, amount, payment])

        await client.query(queries.updateStock, [amount])
        result = orderData.rows[0]
    } catch (error){
        console.error("Error al crear el pedido: ", error)
    } finally {
        client.release()
    }
    return result;
}

const getOrdersByEmail = async (email) => {
    const result = await pool.query(queries.getOrderByEmail, [email]);
    return result.rows;
}

const getAllOrders = async () => {
    const result = await pool.query(queries.getAllOrders);
    return result.rows;
}

module.exports = {
    createOrder,
    getOrdersByEmail,
    getAllOrders
}