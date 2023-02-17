import React, { useEffect, useState } from 'react'
import './Header.css'
import { BsFillHandbagFill } from 'react-icons/bs'
import { MdFoodBank } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import {Link } from 'react-router-dom'



const Header = (props) => {


  return (
    <div className='header'>
      <div className='logo'>
        <img className='logo' src='https://img.freepik.com/premium-vector/salad-food-logo-template_142351-103.jpg?w=740'  />
      </div>
      <div >
        <div className='orgname' >
          <orgname> Food adda Restaurant </orgname>
        </div>
        <div className='address'>
          <address> <HiLocationMarker /> Gopalganj </address>
        </div>
      </div> 
      { props.cart?.length > 0 && <div className='cart'>
          <span className='headercounterno' > {props.cart?.length}</span>
          <Link  to="/checkout" className='cart'> <BsFillHandbagFill  /> </Link>    

      </div> }

    </div>
  )
}

export default Header