import express from "express";
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js'

const app = express();
app.get("/", (req, res) => {
    res.send("servidor esta bien");
})

//middleware que permite parsear las peticiones
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(port, () =>{
    connectDB();
    console.log("server started at http://localhost:" + port)
})