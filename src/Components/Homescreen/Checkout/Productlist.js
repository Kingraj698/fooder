import React from 'react'
import './cartlist.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Productlist = (props) => {
  
  let [cartArr, setCartArr] = useState(JSON.parse(localStorage.getItem('cart')) || [])



  const Incrementnumber = (id, Quantity) => {
    let items = JSON.parse(localStorage.getItem('cart'));
    let obj = items.find((o, i) => {
      if (o.id === id) {
        items[i].qty = items[i].qty + Quantity;
      }
    });
    localStorage.setItem("cart", JSON.stringify(items));

    setCartArr(items)

  };

  const TotalQuantity = cartArr.find(item => item.id === props.id);


  const getTotalPrice = (items) => items
    .map((item) => item.price * item.qty)
    .reduce((acc, value) => acc + value, 0);

  const result = getTotalPrice(cartArr);


  const Deleteitem = (id) => {

    let items = JSON.parse(localStorage.getItem('cart'));
    const filtereditem = items.filter((item) => item.id !== props.id);
    localStorage.setItem("cart", JSON.stringify(filtereditem));
    toast.success('Removed from cart');
     
  }

  return (
    <div className='mainpd1'>
    <div className='cartlistincheckout'>
      <div className='cartlistproductname'>
        <h> {props.title} </h>
      </div>
      <div className='addsubstractbutton'>
        <div className='plusminus1'>
        { TotalQuantity.qty > 1 ?
                <button onClick={() => Incrementnumber(props.id, -1)} className='plusbutton'> - </button>
                : <button onClick={()=> Deleteitem (props.id )} className='plusbutton'> - </button>

                } <h5 className='inputqty' > {TotalQuantity.qty} </h5>
          <button onClick={() => Incrementnumber(props.id, +1)} className='plusbutton1' > + </button>

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