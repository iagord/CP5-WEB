import React from 'react'

import './style.css'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <h1>NETSHOES</h1>

        <input className='navbar-input' placeholder='O que você está procurando?'/>

        <button>
            Carrinho
        </button>

    </div>
  )
}

export default Navbar