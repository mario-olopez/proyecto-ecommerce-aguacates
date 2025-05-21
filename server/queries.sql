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