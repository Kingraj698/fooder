import React, { useEffect, useState } from 'react'
import Axios from 'axios'
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

const Home = () => {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
  const cartidFromLocalStorage = JSON.parse(localStorage.getItem("cartid") || "[]")
  let data = sessionStorage.getItem("Sessionid") || null;




  // const [Time, SetTimestamp] = useState(data)
  const [products, setproduct] = useState([])
  const [cart, setcart] = useState(cartFromLocalStorage)
  const [cartid, setcartid] = useState(cartidFromLocalStorage)
  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 280) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, []);



  useEffect(() => {
    // Time === null && sessionStorage.setItem("Sessionid", Date())
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartid", JSON.stringify(cartid));

    Axios.get('https://dummyjson.com/products')
      .then(res => {
        setproduct(res.data.products)
      }
      ).catch(err => console.log(err))
  }, [cart]
  )

  const addtocart = (id, name, price) => {
    setcart([...cart, { "id": id, "name": name, "price": price, "Qty":null , }]);
    setcartid([...cartid, id]);
    console.log("cart", cartid)
    // const totalid = cartid.filter((x,index)=> x === item.id)
  }

  const getTotalPrice = (items) => items
    .map((item) => item.price)
    .reduce((acc, value) => acc + value, 0);
  const result = getTotalPrice(cart);


  return (

    <div className='home'>
      <Slides />
      <Categories />
      <Header cart={cart} />
      <Products addtocart={addtocart} cartid={cartid} />
      {cart.length > 0 && <Chekoutpopup cart={cart} result={result} />}

    
      {
        isOpen && <Menu cart={cart} />

      }


    </div>

  )
}

export default Home