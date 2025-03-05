import express from "express";
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js'
import path from "path";

const app = express();
// app.get("/", (req, res) => {
//     res.send("servidor esta bien");
// })

//middleware que permite parsear las peticiones
app.use(express.json());
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
});
}

app.listen(port, () =>{
    connectDB();
    console.log("server started at http://localhost:" + port)
})