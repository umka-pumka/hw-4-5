import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,

});

const getBooks = () => endpoint.get('/books');
const getCartItems = () => endpoint.get('/cartItems');

const addCartItems = (payload) => endpoint.post('/cartItems', payload);
const deleteCartItems = (payload) => endpoint.delete(`/cartItems/${payload.id}`);
const editCartItems = (payload) => endpoint.put(`/cartItems/${payload.id}`,payload);

const api ={
    getBooks,
    getCartItems,
    addCartItems,
    deleteCartItems,
    editCartItems,
}

export default api;

