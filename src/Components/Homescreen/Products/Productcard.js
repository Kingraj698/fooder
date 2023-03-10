import React from 'react'
import './Productcard.css'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Productcard = (props) => {

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

  const addtocart = (id, title, price) => {

    let items = JSON.parse(localStorage.getItem('cart')) || []

    items.push({ id, title, price, qty: 1 })
    localStorage.setItem("cart", JSON.stringify(items))
    setCartArr(items)
  }

  const Deleteitem = () => {

    let items = JSON.parse(localStorage.getItem('cart'));
    const filteredPeople = items.filter((item) => item.id !== props.id);
    localStorage.setItem("cart", JSON.stringify(filteredPeople));
    setCartArr(filteredPeople);
    toast.success('Removed from cart');
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


            {cartArr.find((o) => o.id === props.id) ?
              <div className='plusminus'>
                {TotalQuantity.qty > 1 ?
                  <button onClick={() => Incrementnumber(props.id, -1)} className='plusbutton'> - </button>
                  : <button onClick={() => Deleteitem(props.id)} className='plusbutton'> - </button>

                }

                <h5 className='inputqty' > {TotalQuantity.qty} </h5>

                <button onClick={() => Incrementnumber(props.id, +1, props)} className='plusbutton' > + </button>
              </div>

              :
              <button className='addtocartbutton' onClick={() => addtocart(props.id, props.title, props.price)} > Add </button>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Productcard