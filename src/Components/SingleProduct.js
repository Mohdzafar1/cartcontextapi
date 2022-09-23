import React,{useContext} from 'react'
import {Cart} from "../Context"

const SingleProduct = ({prod}) => {
  const {cart,setCart}=useContext(Cart)
  return (
    <div>
      <div className="">
      <div className="">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={prod.img}/>
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{prod.name}</h3>
                        <span>{prod.price}</span>
                       
                      </div>
                      {cart.includes(prod) ? (
                        <button className='btn btn-primary'
                      onClick={()=>{
                       setCart(cart.filter((c)=> c.id !== prod.id))
                      }}
                      >Remove to Cart</button>

                      ):(
                        <button className='btn btn-primary'
                      onClick={()=>{
                       setCart([...cart,prod])
                      }}
                      >Add to Cart</button>
                      
                      )}
                    
                    </div>
                  </div>
                </div>
      </div>       
  </div>
  )
}

export default SingleProduct
