import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Productcard from './Productcard'

const Products = (props) => {

  const [products, setproduct] = useState([]);

  useEffect(() => {
    Axios.get('https://dummyjson.com/products')
      .then(res => {
        setproduct(res.data.products)
      }
      ).catch(err => console.log(err))
  },[]
 )

  return (
    
    <div > 
    <table className='Productslistitem'>  
      <tbody>
        {products.map((item, index) => (
          <tr key={index}>
            <Productcard 
            title={item.title}
             price={item.price}
              id={item.id} 
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