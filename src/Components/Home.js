import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { productArray } from './CardData'
import SingleProduct from './SingleProduct'
import {Cart} from "../Context"

const Home = () => {
    const [products]=useState(productArray)


      

  return (
    <div>
        <div className="container py-5">
        <h1>Products</h1>
          <div className="row">
            {products.map((prod)=>(
           <div className="col-lg-3">
           <SingleProduct prod={prod} key={prod.id}/>
           </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home