import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import fetchAllBooks from '../../store/reducers/booklistCreator'; 
import BooklistItem from './BooklistItem'; 
import { addToCart } from '../../store/reducers/cartCreator'; 
 
const BookList = () => { 
    const { books, booksError, booksStatus } = useSelector((state) => state.booklist); 
    const dispatch = useDispatch(); 
 
    const onaddToCart = (id)=> dispatch(addToCart(id)) 
 
    useEffect(() => { 
        dispatch(fetchAllBooks()); 
    },[]); 
 
     
    const booksCase = { 
        pending: 'loading...', 
        fullfilled: books?.map((book) => ( 
            <BooklistItem key={`books-item-${book.id}`} book={book} addToCart={onaddToCart} /> 
        )), 
        rejevted: booksError, 
    } 
 
    return ( 
        <ul>{booksCase[booksStatus]}</ul> 
    ) 
} 
 
export default BookList