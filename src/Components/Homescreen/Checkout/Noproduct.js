import React from 'react'
import './noproduct.css'
import {Link } from 'react-router-dom'

const Noproduct = () => {
  return (
    <div className='noproduct'>

        <h4>
            no products are added in the cart !
        </h4>
        <Link  to="/" className='clearcart'> Browse products </Link>



    </div>
  )
}

export default Noproduct