import React ,{useEffect, useState,useContext}from 'react'
import SingleProduct from './SingleProduct';
import {Cart} from "../Context"

const CartPage = ({}) => {
    const [total,setTotal]=useState();
    const {cart}=useContext(Cart)
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
      }, [cart]);
    
  return (
    <div>
    <div className="container">
         <h3>My Cart</h3>
         <span>Total: {total}/</span>
         <div className="row">
         <div className="col-lg-3">
         {cart.map((prod)=>(
            <SingleProduct prod={prod} key={ prod.id}/>
         ))}
         </div>
         </div>
    </div>
    </div>
  )
}

export default CartPage
