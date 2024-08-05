import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    products: [],
    status: "start",
    error: ""
}

const url = "https://66a07bf97053166bcabb907f.mockapi.io/Products"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
    const res = await axios.get(url)
    return res.data;
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state =>{
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) =>{
                state.status = "succeeded"
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) =>{
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default productsSlice.reducer