import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import Productlist from './Productlist'
import Noproduct from './Noproduct'
import Ordersummery from './Ordersummery'




const Checkout = () => {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")


  const [cart, setcart] = useState(cartFromLocalStorage);
  const [Deliverycharge, setDeliverycharge] = useState(40)


  useEffect(() => {



  }
    , [cart])

  const getTotalPrice = (items) => items
    .map((item) => item.price)
    .reduce((acc, value) => acc + value, 0);

  const result = getTotalPrice(cart);

  const clearcart = () => {

    localStorage.clear("cart");
    setcart([])
    localStorage.clear("cartid");
  }


  return (
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
                    title={item.name}
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
  )
}

export default Checkout