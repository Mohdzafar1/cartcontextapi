import React,{useState} from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './Components/Header';
import CartPage from './Components/CartPage';
import Home from './Components/Home';

function App() {


  
  return (
    <>
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/CartPage" element={<CartPage/>}/>
       </Routes>
      </BrowserRouter>
    </>
 
    
  );
}

export default App;
