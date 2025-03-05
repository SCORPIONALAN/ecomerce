import Producto from '../models/product.js'
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try{
        // si pasamos un objeto vacio, mandaremos a llamar a todos
        const productos = await Producto.find({});
        res.status(200).json({success:true, data: productos})
    }catch(error){
        console.log("error al traer los productos", error.message);
        res.status(500).json({success:false, message: "Error en el server"});
    }
};

export const postProducts = async (req, res) => {
    const producto = req.body; // El usuario enviara estos datos
    if(!producto.name || !producto.price || !producto.image){
        return res.status(400).json({success: false ,message: "Por favor llene todos los campos"});
    }
    const newProduct = new Producto(producto)
    try{
        // salvarlo en la base de datos
        await newProduct.save();
        //Mensaje para mostrar exito
        res.status(201).json({success:true, data: newProduct});
    }catch(error){
        console.error("Error al crear el producto", error.message);
        res.status(500).json({success:false, message: "Error en el server"});
    }
};

export const deleteProducts = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Producto no encontrado"});
    }
    try{
        await Producto.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Producto eliminado correctamente"});
    }catch(error){
        console.error("Error al crear el producto", error.message);
        res.status(500).json({success:false, message: "Error del servidor"});
    }
};

export const putProducts = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    // En caso de que la url no conozca el ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Producto no encontrado"});
    }
    try{
        const productoActualizado = await Producto.findByIdAndUpdate(id, product,{new:true});
        res.status(200).json({success: true, data: productoActualizado, message: "Producto actualizado correctamente"});
    }catch(error){
        console.error("Error al crear el producto", error.message);
        res.status(500).json({success:false, message: "Error en el server"});
    }
};