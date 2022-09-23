import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Cart =createContext();

const Context = ({children}) => {

    const[cart,setCart]=useState([])
  return (
    <div> 
    <Cart.Provider value={{cart,setCart}}>
        {children}
    </Cart.Provider>
      
    </div>
  )
}

export default Context
