import React from 'react';
import './Payment.css'
import swal from 'sweetalert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

  const navigate = useNavigate();



  const orderplacessuccess = () => {
    swal({
      title: "ORDER PLACED",
      text: "Thanks for placing your order",
      icon: "success",
      button: false,
      timer: 3000,
      
    })
    const Xyz = localStorage.clear("cart");
    navigate('/userprofile');
  }



  return (
    <div className='paymentmain'>
      <div>
      <input className='paymentinputfield' type="radio"  name='paymentoption'/>
      <label> COD </label> 

      </div>
      <div>
        <input className='paymentinputfield' type="radio" name='paymentoption' />
      <label>Pay on counter</label>

      </div>
      <div>
      <input className='paymentinputfield' type="radio" name='paymentoption' />
      <label>    UPI </label>

      </div>



      <Button onClick={orderplacessuccess} > Continue </Button>


      
    </div>


  )
}

export default  Payment