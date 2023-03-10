import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './checkoutpopup.css'
import getTotalPrice from '../Products/Products'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import ReactTextTransition, { presets } from "react-text-transition";


const Chekoutpopup = () => {



  const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    setcart(JSON.parse(localStorage.getItem("cart")));

  },[cart])



  const getTotalPrice = (items) => items
    .map((item) => item.price * item.qty)
    .reduce((acc, value) => acc + value, 0);

  const result = getTotalPrice(cart);

  return (

    <div className='checkoutpopup'>
      <div className='itemprice'>
        <span className='priceincheckout'  >
        <ReactTextTransition
            springConfig={presets.wobbly}
            style={{ margin: "0 4px" }}
            inline className="big">
            {cart?.length}
          </ReactTextTransition>items &nbsp;

          <span style={{ color: 'white' }}>
        &nbsp;|
        </span>
        </span>
        <span className='priceincheckout'>₹<ReactTextTransition
            springConfig={presets.wobbly}
            style={{ margin: "0 4px" }}
            inline className="big">
            {result}
          </ReactTextTransition>
        </span>

      </div>
      <div className='checkoutbtn1' >
        <Link to="/checkout" className='checkoutbtn' > Order now <MdOutlineArrowRightAlt /> </Link>
      </div>

    </div>

  )
}

export default Chekoutpopup