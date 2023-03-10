import React from 'react';
import './Payment.css'
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

  const navigate = useNavigate();



  const orderplacessuccess = () => {
    window.localStorage.removeItem('cart');
    swal({
      title: "ORDER PLACED",
      text: "Thanks for placing your order",
      icon: "success",
      button: false,
      timer: 3000,
      
    })
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
      <input  className='paymentinputfield' type="radio" name='paymentoption' disabled/>
      <label>    UPI  <span style={{ fontSize:"10px ", color:"red"  }} >coming soon</span>   </label>
      </div>
      <Button onClick={orderplacessuccess} > Continue </Button>
    </div>
    
  )
}

export default  Payment