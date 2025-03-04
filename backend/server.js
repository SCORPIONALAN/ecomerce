import express from "express";
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js'

const app = express();
app.get("/", (req, res) => {
    res.send("servidor esta bien");
})

//middleware que permite parsear las peticiones
app.use(express.json());

app.use("/api/productos", productRoutes);

app.listen(5000,() =>{
    connectDB();
    console.log("server started at http://localhost:5000")
})