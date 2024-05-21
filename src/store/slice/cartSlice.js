import { createSlice } from "@reduxjs/toolkit";
import fetchCart from "../reducers/cartCreator";

const initialState = {
    cart: [],
    cartStatus: 'pending',
    cartError: '',
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchCart.pending, (state) => {
                state.cartStatus = 'pending';
                state.cart = [];
                state.cartError = '';
            })

            .addCase(fetchCart.rejected, (state, action) => {
                state.cartStatus = 'rejected';
                state.cartError = action.payload;
            })

            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cartStatus = 'fulfilled';
                state.cart = action.payload;

            })

          

    }

});

const cartReducer = cartSlice.reducer;

export default cartReducer;
export const { setCart } = cartSlice.actions;
