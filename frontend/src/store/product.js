import {create} from "zustand";

// Forma de guardar de forma global
export const useProductStore = create((set) =>({
    products:[],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.image|| !newProduct.price){
            return {success:false, message:"favor de llenar todos los campos"}
        }
        const res = await fetch("/api/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products:[...state.products, data.data]}))
        return{success:true, message:"Todo listo! Producto creado"}
    }

}))
/*
        FORMA DE GUARDADO LOCAL 
const[state, setState] = useState([])
*/