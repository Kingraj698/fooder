import React, { useEffect, useState,useCallback } from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import Productlist from './Productlist'
import Noproduct from './Noproduct'
import Ordersummery from './Ordersummery'
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
import Loading from '../../Loading/Loading'



const Checkout = () => {

  const [loading, setLoading] = useState(true);
  const carttt = JSON.parse(localStorage.getItem("cart")) || []

  const [cart, setcart] = useState(carttt);

  const updatecart = useCallback(
    () => {
      setcart(JSON.parse(localStorage.getItem("cart")) || []);
    }
  )
  

  useEffect(()=> {
    updatecart();
    setTimeout(()=>{
      Loader();
    },300 )

  },[carttt])

  const Loader = () => {
      setLoading(false)
   
  }
  const getTotalPrice = (items) => items
    .map((item) => item.price * item.qty)
    .reduce((acc, value) => acc + value, 0);

  const result = getTotalPrice(cart);

  const clearcart = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        localStorage.clear("cart");
        toast.success('Cart has been cleared')
      } 
    }); }


    if (loading) {
      return <div> <Loading/> </div>
    }  else

  {return (
    <div>
      <div className='checkout' >
        <div className='heading'>
          <Link to='/' > <TiArrowBack className='back' />   </Link>
          <span className='headingofcheckoutcart'> Your cart items </span>
        </div>
        {cart.length > 0 ? <div>

          <div className='clearcartdiv'>
            <button className='clearcart' onClick={clearcart}>  Clear cart</button> </div>

          <div className='allitems'>
            <tbody>
              {cart.map((item, i) =>
                <tr key={i}>
                  <Productlist
                    title={item.title}
                    price={item.price}
                    id={item.id}
                  />

                </tr>

              )

              }

            </tbody>
            <Ordersummery cart={cart} result={result} />


          </div>



        </div> :

          <Noproduct />

        }
      </div>

    </div>
  )}
}

export default Checkout