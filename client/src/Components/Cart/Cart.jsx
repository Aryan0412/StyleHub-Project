import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Context } from '../../Context';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = () => {
    const {cartItems, setCartItems, cartSubTotal, setCartSubTotal, handleRemoveFromCart} = useContext(Context);
    useEffect(()=>{
        let price = 0;
        cartItems.map((item)=>{
            let singleProductPrice = item?.attributes?.price * item?.attributes?.quantity;
            price+= singleProductPrice;
        });
        setCartSubTotal(price);
    },[cartItems]);
    console.log(cartItems);
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {cartItems?.map((item) => {
                return <div className='item' key={item.id} >
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" />
                    <div className="details">
                        <h1>{item?.attributes?.title}</h1>
                        <p>{item?.attributes?.desc?.substring(0, 100)}</p>
                        <div className="price">{item?.attributes?.quantity} * ₹{item?.attributes?.price}</div>

                    </div>
                    
                    <DeleteOutlinedIcon className='delete' onClick = {()=>{handleRemoveFromCart(item)}} />

                </div>

            })}
            <div className="total">
                <span>SUBTOTAL : </span>
                <span>₹{cartSubTotal}</span>

            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={()=>{setCartItems([])}} >Reset Cart</span>

        </div>
    )
}

export default Cart