import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
  const {cart,clear,removeItem} = useContext( CartContext)
  console.log(cart)
  return (
    <>
    <div className='cartContenedor'>
     
     {cart.map((prod)=>(
        <div key={prod.id} className="cards">
          <img src={prod.img} alt="" className='imagen-card'/>
          <h2 className='item-titulo'>{prod.title}</h2>
          <p> Precio: ${prod.price}</p>
          <p>Cantidad seleccionada:  {prod.quantity}</p>
          <button onClick={() =>removeItem(prod.id)} className='boton-carro'> eliminar Producto</button>
        </div>
      ))

      }
    </div>
    <div>
    <button onClick={clear}>borrar carrito</button>
     </div>
    </>
  )
}

export default Cart