import React, { useEffect } from 'react' 
// import classes from './Cart.module.scss' 
import { Button, Spinner, Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux' 
import fetchCart, { addToCart, removeFromCart } from '../../store/reducers/cartCreator' 
 
const Cart = () => { 
    const { cart, cartStatus, cartError } = useSelector((state) => state.cart); 
    const dispatch=useDispatch(); 
 
 
    useEffect(()=>{ 
        dispatch(fetchCart()); 
    },[]); 
 
 
    const renderItems = (el, idx) => { 
        const { title, count, total, id } = el; 
 
        const onaddCart = () => dispatch(addToCart(id)); 
        const onRemoveFromCart = () => dispatch(removeFromCart(id)); 
        const onDeleteFromCart = () => dispatch(removeFromCart(id)); 
 
 
        return ( 
            <tr key={`item=${id}`}> 
                <td>{idx + 1}</td> 
                <td>{title}</td> 
                <td>{count}</td> 
                <td>{total}$</td> 
 
                <td> 
                    <Button variant='outline-success my-1' onClick={onaddCart}> 
                        <i class="fa-solid fa-plus"></i> 
                    </Button> 
 
                    <Button variant='outline-warning my-1' onClick={onRemoveFromCart}> 
                        <i class="fa-solid fa-minus"></i> 
                    </Button> 
 
                    <Button variant='outline-danger my-1' onClick={onDeleteFromCart}> 
                        <i class="fa-solid fa-trash"></i> 
                    </Button> 
                </td> 
            </tr> 
        ); 
    }; 
 
    const cartCasses = { 
        pending: <Spinner />, 
        rejected: cartError, 
        fulfilled: ( 
            <Table> 
                <thead> 
                    <tr> 
                        <th>№</th> 
                        <th>Item </th> 
                        <th>Price</th> 
                        <th>Count</th> 
                        <th>Action</th> 
 
                    </tr> 
                </thead> 
 
                <tbody>{cart.map(renderItems)}</tbody> 
 
            </Table> 
        ) 
    } 
    return ( 
        <div> 
            <h2>Your order</h2> 
 
 
            {cartCasses[cartStatus]} 
        </div> 
    ) 
} 
 
export default Cart