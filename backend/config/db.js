import mongoose from "mongoose";
import dotenv from "dotenv";

// Para poder usar variables de entorno
dotenv.config();
export const connectDB = async () =>{
    try{
        const coneccion = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${coneccion.connection.host}`);
    }
    catch (error){
        console.log(`Error: ${error.message}`);
        process.exit(1); // Significa fallo y si es 0 es un paso!
    }
}