import { Product } from "@/interface/product";
import { addProduct, deleteProduct, getAllProduct, sortProduct, updateProduct } from "@/services/product.service";
import { createSlice } from "@reduxjs/toolkit";


// sap xep 
const productState:Product[] =[]

const productReducer =createSlice({
    name:"product",
    initialState:{
        product:productState,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sortProduct.fulfilled,(state,action)=>{
            state.product=action.payload
        })
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.product=action.payload
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.product.push(action.payload)
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.product=state.product.filter((items:any)=>items.id !== action.payload)
        })
        .addCase(updateProduct.fulfilled,(state,action)=>{
         let index =state.product.findIndex((product:any)=>{
            return product.id===action.payload.id})
         if (index !== -1){
            state.product[index]=action.payload
         }
        })
    }
})
export default productReducer.reducer