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
    },
    fetchProducts: async()=>{
        const res = await fetch("/api/products");
        const data = await res.json();
        set({products: data.data});
    },
    deleteProduct: async (pid)=>{
        const res = await fetch(`/api/products/${pid}`,{
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) return {success:false, message: data.message};
        set(state => ({products: state.products.filter(product => product._id !== pid)}))
        return {success:true, message: data.message};
    },

    updateProduct: async (pid, updateProduct) =>{
        const res = await fetch(`/api/products/${pid}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        });
        const data = await res.json();
        if(!data.success) return {success:false, message: data.message};
        // Actualizame solamente el que ando buscando, no mas, no menos en el UI
        set(state => ({products: state.products.map((product) => product._id === pid ? data.data : product)}))
        return {success:true, message: data.message};
    }
}))
/*
        FORMA DE GUARDADO LOCAL 
const[state, setState] = useState([])
*/