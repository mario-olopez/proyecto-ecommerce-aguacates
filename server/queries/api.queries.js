const queries = {
    insertOrder: `
        INSERT INTO orders (id_user, amount, payment)
        VALUES ($1, $2, $3)
        RETURNING *;
    `,

    updateStock: `
        UPDATE aguacates
        SET stock_kg = stock_kg - $1
        WHERE id = 1;
    `,

    getOrderByEmail: `
        SELECT
            o.id_order, o.amount, o.payment, o.date, o.state,
            u.name, u.surname, u.email, u.address, u.phone
        FROM orders o
            JOIN users u ON o.id_user = u.id_user
        WHERE u.email = $1;
    `,
    findUserByEmail: `
        SELECT * FROM users WHERE email = $1;
    `,

    insertUser: `
        INSERT INTO users (name, surname, email, address, phone)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `,
    getStock: `
    SELECT stock_kg FROM aguacates WHERE id = 1
    `
}

module.exports = queries