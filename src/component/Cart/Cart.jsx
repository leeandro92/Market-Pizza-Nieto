import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
  const {cart,clear,removeItem,precioTotal} = useContext( CartContext)
  if (cart.length === 0) {
    return (
        <div className='contenedorCarga'>
          <h2>El carrito esta vacio</h2>
           <Link to={"/"} className="irAlHome">
             Ir a los productos
          </Link>
        </div>
    )
    
  }
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
    <h4 >PRECIO TOTAL $ {precioTotal()}</h4>
     </div>
    </>
  )
}

export default Cart