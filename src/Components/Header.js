import React,{useContext} from 'react'
import {Link} from "react-router-dom"
// import Cart from './CartPage'
import {Cart} from "../Context"

const Header = () => {
   
  const {cart}=useContext(Cart);

  return (
    <div>
      <nav className='navbar bg-dark text-light'>
      <div className="container">
      <Link to="/" className="navbar-brand">Home</Link>
       <div>
        <Link to="/CartPage">Cart
        ({cart.length})
        </Link>

       </div>
      </div>
      </nav>
    </div>
  )
}

export default Header
