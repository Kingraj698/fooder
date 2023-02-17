import React from 'react'
import './cartlist.css'

const Productlist = (props) => {

  return (
    <div className='mainpd1'>
    <div className='cartlistincheckout'>
      <div className='cartlistproductname'>
        <h> {props.title} </h>
      </div>
      <div className='addsubstractbutton'>
        <div className='plusminus1'>
          <button className='plusbutton1'> - </button>
          <input value="1" className='input1' />
          <button className='plusbutton1' > + </button>

        </div>
      </div>
      <div className='head3'>
        <h className="price1"> <ruppe className="ruppe">₹ </ruppe>{props.price}</h>
      </div>
    </div>
    </div>
  )
}

export default Productlist