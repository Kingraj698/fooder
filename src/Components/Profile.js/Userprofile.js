import React, { useState } from 'react'
import './user.css';
import Register from '../Register/Register';



const Userprofile = () => {

  const [isloggedin, setislodgged] = useState(true)

  return (
    <div className='userprofile'>

      { isloggedin ? <div className='userprofilehead'>
        <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' alt='userprofilepic' />
        <div>
          <p> King raj </p>
          <p> 8084421781 </p>
        </div>
        <button> Logout </button>
      </div>
      : <Register/> }

      <div>
        order history
        

      </div>

      

    </div>

  )
}

export default Userprofile