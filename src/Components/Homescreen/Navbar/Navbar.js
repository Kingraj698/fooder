import React, { useState } from 'react'
import { IoMdContact } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import './Navbar.css'
import { BsFillHandbagFill } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import Chekoutpopup from '../Checkout/Chekoutpopup'
import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { TiArrowBack } from 'react-icons'


function Nav() {


      return (
            <div>
                  <nava>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'activebar' : 'inactive')}> <AiOutlineHome />  </NavLink>
                        <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'activebar' : 'inactive')}> <BsFillHandbagFill />  </NavLink>
                        <NavLink to="/userprofile" className={({ isActive }) => (isActive ? 'activebar' : 'inactive')}> <CgProfile />  </NavLink>


                  </nava>
            </div>



      )
}

export default Nav;