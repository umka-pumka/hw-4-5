import React from 'react' 
import classes from './booklist.module.scss' 
import { Button } from 'react-bootstrap'; 
 
 
 
const BooklistItem = ({ book, addToCart }) => { 
 
  const { imgUrl, id, title, price, author } = book; 
 
 
  const onAddBook = () => addToCart(id); 
 
 
  return ( 
    // <div className={classes.col}>
    <li className={classes.list_item}> 
      <div className={classes.list_item_cover}> 
        <img src={imgUrl} alt="book" /> 
 
      </div> 
      <div className={classes.list_item_details}> 
        <h4>{title}</h4> 
        <div>{author}</div> 
        <div className={classes.list_item_price}>{price}$</div> 
 
        <Button className={classes.btn} onClick={onAddBook}>add to cart</Button> 
      </div> 
 
 
    </li> 
    //  </div>
  ) 
} 
 
export default BooklistItem