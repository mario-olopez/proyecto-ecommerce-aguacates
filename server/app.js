const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

//Rutas
const orderRoutes = require("./routes/order.routes")
// const userRoutes = require("./routes/user.routes")

//Middlewares
app.use(cors())
app.use(express.json())

//Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));


//Rutas API
app.use("/api/orders", orderRoutes);
//app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("API de venta de aguacates en proceso")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})