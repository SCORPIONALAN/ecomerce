import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    timestamps: true //CreatedAt, updatedAt
});
const product = mongoose.model("Product", productoSchema);
export default product;