import React from 'react'
import './style.css'

const Item = () => {
  return (
    <div className="Item-Wrapper">
        <img alt="item" className="Item-Image" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom1.jpg?ts=1657368380&ims=326x"/>
        <h3>Tenis Mizuno Wave Titan</h3>
        <p>R$ 299,99</p>

        <button className='Item-Button'>Adicionar ao Carrinho</button>
    </div>
  )
}

export default Item