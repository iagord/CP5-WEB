import React from 'react'

import './style.css'
import ShoppingCart from '../ShoppingCart'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <h1>BFSHOES</h1>

        <input className='navbar-input' placeholder='O que você está procurando?'/>

       <ShoppingCart/>

    </div>
  )
}

export default Navbar