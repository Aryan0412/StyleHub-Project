import React, { Children } from 'react'
import { useEffect } from 'react';
import { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const Context = createContext();
const AppContext = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(()=>{}, [cartItems]);
    const handleAddToCart = (product, quantity)=>{
      let items = [...cartItems];
      let index = items.findIndex(p =>p.id === product.id);
      if(index!==-1){
        items[index].attributes.quantity += quantity;
      }else{
        product.attributes.quantity = quantity;
        items = [...items, product];
      }
      setCartItems(items);
    };
    const handleRemoveFromCart = (product) =>{
      let items = [...cartItems];
      items = items.filter((item => item.id != product.id));
      setCartItems(items);
    };
  

  return (
    <Context.Provider
    value={{
        cartItems,
        cartCount,
        cartSubTotal,
        setCartItems,
        setCartCount,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default AppContext