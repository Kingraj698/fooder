import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Productcard from './Productcard'

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
const cartidFromLocalStorage = JSON.parse(localStorage.getItem("cartid") || "[]")
const productsFromLocalStorage = JSON.parse(localStorage.getItem("products") || "[]")

const Products = (props) => {

  const[Quantity,setQuantity]=useState(1)

  const [products, setproduct] = useState(productsFromLocalStorage);
  const [cart, setcart] = useState(cartFromLocalStorage);
  const [cartid,setcartid]=useState(cartidFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartid", JSON.stringify(cartid));
        
    Axios.get('https://dummyjson.com/products')
      .then(res => {
        setproduct(res.data.products)
      }
      ).catch(err => console.log(err))
  },[cart]
 )

  // const addtocart = (id, name, price) => {
  //   setcart([...cart, { "id":  id, "name": name, "price": price ,}]);
  //   setcartid([...cartid,id]);
  //   console.log("cart", cartid)
  //   // const totalid = cartid.filter((x,index)=> x === item.id)
  // }

  const getTotalPrice = (items) => items
    .map((item) => item.price)
    .reduce((acc, value) => acc + value, 0);

  // const result = getTotalPrice(cart); 


  return (
    
    <div > 
    <table className='Productslistitem'>  
      <tbody>
        {products.map((item, index) => (
          <tr key={index}>
            <Productcard title={item.title}
             price={item.price}
              id={item.id} 
              addtocart={props.addtocart}
              cartid={props.cartid}
              cart={cart} 
              Quantity={1}  
              
/>
              
          </tr>
        ))}
      </tbody>
      </table>
    </div>


  )
}

export default Products