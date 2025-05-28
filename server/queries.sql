DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS aguacates CASCADE;

CREATE TABLE users (
  id_user SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  address TEXT NOT NULL,
  phone TEXT NOT NULL
);

CREATE TABLE orders (
  id_order SERIAL PRIMARY KEY,
  id_user INTEGER REFERENCES users(id_user) ON DELETE CASCADE,
  amount INTEGER NOT NULL,                
  payment NUMERIC(10, 2) NOT NULL,                
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  state TEXT DEFAULT 'pendiente' CHECK (state IN ('pendiente', 'pagado'))
);

CREATE TABLE aguacates (
  id SERIAL PRIMARY KEY,
  stock_kg INTEGER NOT NULL
);

INSERT INTO aguacates (stock_kg) VALUES (1500);

INSERT INTO users (name, surname, email, address, phone)
VALUES 
  ('Mario', 'López', 'mario@gmail.com', 'Avenida de mi casa, 38', '606120508'),
  ('Jonás', 'Jiménez', 'jonasitoj@gmail.com', 'Calle de la gran casa, 33', '633185970');

INSERT INTO users (name, surname, email, address, phone)
VALUES
  ('Jesús', 'Juliánez', 'jjulianes@gmail.com', 'Calle de Jesucristo, 666', '666366663');

--Obtener datos de un pedido por email

SELECT 
  o.id_order, o.amount, o.payment, o.date, o.state,
  u.name, u.surname, u.email, u.address, u.phone
FROM orders o
JOIN users u ON o.id_user = u.id_user
WHERE u.email = $1;

-- Consulta para todo el dinero ganado
SELECT SUM(payment) AS total_recaudado FROM orders;