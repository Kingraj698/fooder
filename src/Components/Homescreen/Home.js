import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productcard from './Products/Productcard'
import Header from '../Homescreen/Header/Header'
import './Home.css'
import Navbar from './Navbar/Navbar'
import Slides from './Slides/Slides'
import Categories from './Categories/Categories'
import Products from './Products/Products'
import Chekoutpopup from './Checkout/Chekoutpopup'
import { Routes, Route } from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import Menu from './Menu/Menu'
import Ordersummery from './Checkout/Ordersummery'
import Services from '../Services/Services'
import Aboutus from '../Aboutus/Aboutus'
import Loading from '../Loading/Loading'
import { useCallback } from 'react'




const Home = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const carttt = JSON.parse(localStorage.getItem("cart")) || []

  const [cart, setcart] = useState(carttt);

  const updatecart = useCallback(
    () => {
      setcart(JSON.parse(localStorage.getItem("cart")) || []);
    }
  )
  

  useEffect(()=> {

    updatecart();
  },[carttt])


  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 280) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });

  },[]);



  const getTotalPrice = (items) => items
    .map((item) => item.price * item.qty )
    .reduce((acc, value , qty) => acc + value, 0);
  const result = getTotalPrice(cart);

    return (

      <div className='home'>
  
        <Slides />
        <Categories />
        <Header cart={cart} />
        <Products />
        {cart.length > 0 && <Chekoutpopup />}
        {
          isOpen && <Menu cart={cart} />
        }
  
      </div>
  
    )
  }

export default Home