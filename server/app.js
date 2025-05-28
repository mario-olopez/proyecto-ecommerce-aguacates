const express = require("express")
const cors = require("cors")
require('dotenv').config();

const app = express()
const port = 3000

//Importación de middlewares
const morgan = require('./middlewares/morgan')

//Rutas
const orderRoutes = require("./routes/order.routes")
const aguacatesRoutes = require("./routes/aguacates.routes")
// const userRoutes = require("./routes/user.routes")

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan)


//Rutas API
app.use("/api/orders", orderRoutes);
app.use("/api/stock", aguacatesRoutes)
//app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("API de venta de aguacates en proceso")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})