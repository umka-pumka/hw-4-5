import { createSlice } from '@reduxjs/toolkit';
import fetchAllBooks from '../reducers/booklistCreator';


const initialState = {
    booksLoading: false,
    books: [],
    booksError: '',
    booksStatus: 'pending',
};

const bookListSlice = createSlice({
    initialState,
    name: 'booklist',
    reducers: {
        setBppksStatus: (state, action) => {
            state.booksStatus = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBooks.pending, (state, action) => {
            state.booksStatus = 'pending ';
            state.books = [];
            state.booksError = '';

        });
        builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
            state.booksStatus = 'fullfilled';
            state.books = action.payload;
        });
        builder.addCase(fetchAllBooks.rejected, (state, action) => {
            state.booksStatus = 'rejected';
            state.booksError = action.payload;
        })
    }
});

const bookListReducer = bookListSlice.reducer;
export default bookListReducer;
export const { setBppksStatus } = bookListSlice.actions;