import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './checkoutpopup.css'
import getTotalPrice from '../Products/Products'
import {MdOutlineArrowRightAlt} from 'react-icons/md'

const Chekoutpopup = (props) => {

  return (
    
    <div className='checkoutpopup'>
        <div className='itemprice'>
            <span>
               {props.cart?.length} items | 
            </span>
            <span className='priceincheckout'>
            ₹{props.result} Price
            </span>

        </div>
        <div className='checkoutbtn1' >
        <Link to="/checkout"  className='checkoutbtn' > Order now <MdOutlineArrowRightAlt/> </Link>
        </div>

    </div>

  )
}

export default Chekoutpopup