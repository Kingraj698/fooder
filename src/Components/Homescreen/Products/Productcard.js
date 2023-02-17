import React from 'react'
import './Productcard.css'
import bgimage from '../../../png-image.png'
import { useState } from 'react'
import { useEffect } from 'react';

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Productcard = (props) => {

  const [cart, setcart] = useState(cartFromLocalStorage);
  const [Qty, setQty] = useState(props.Quantity);


  const Incrementnumber = (id) => {
    setQty(Qty + 1);
    console.log(Qty);
    
}


  const Decrementnumber = () => {
    {
      Qty > 0 && setQty(Qty - 1)

    }
  }

  return (
    <div className='mainpd'>
      <div className='productcard'>
        <div className='details'>
          <h> {props.title} </h>
          <h className="price"> ₹ {props.price}</h>
        </div>
        <div className='mainpd2'>
          <img className='productimage' src='https://media-cdn.tripadvisor.com/media/photo-s/19/1e/1a/3a/pizza-hut.jpg' />
          <div className='Addtocartandqty'>
            {props.cartid?.includes(props.id) ?
              <div className='plusminus'>
                <button onClick={()=>Decrementnumber(props.id)} className='plusbutton'> - </button>
                <input readOnly="true" value={Qty} className='inputqty' />
                <button onClick={()=>Incrementnumber(props.id)} className='plusbutton' > + </button>
              </div>

              :

              <button className='addtocartbutton' onClick={() => props.addtocart(props.id, props.title, props.price)} > Add </button>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Productcard