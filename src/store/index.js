import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./slice/booklistSlice";
import cartReducer from "./slice/cartSlice";

const rootReducer={
    booklist:bookListReducer,
    cart: cartReducer
};

const store = configureStore({
    reducer:rootReducer,
})


export default store;
