import React from 'react'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import Form from '../Form/Form'

const Cart = () => {
  const {cart,clear,removeItem,precioTotal} = useContext( CartContext)
  const [idCompra,setIdCompra] =useState("")
  const obtenerIdCompra= (id)=> {
setIdCompra(id)
  }
  if(idCompra) {
    return (
    <div className='idCompraContenedor'>
      <div className='idCompra'>
        <h2>Gracias por la compra tu id es:<b style={{fontSize:"35px"}}>{idCompra}</b></h2>
      </div>
    </div>
    )
  }
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
  
  return (
    <div >
      <div className='cartContenedor'>  
      {cart.map((prod)=>(
          <div key={prod.id} className="cards">
            <img src={prod.img} alt="" className='imagen-card'/>
            <h2 className='item-titulo'>{prod.title}</h2>
            <p> Precio: ${prod.price}</p>
            <p>Cantidad seleccionada:  {prod.quantity}</p>
            <button onClick={() =>removeItem(prod.id)} className='button'> Eliminar Producto</button>
          </div>
        ))
        }
      </div>
      <div className='total-contenedor'>
        <div className='borrarCarrito'>
          <button onClick={clear} className="btnBorrarCarro">Vaciar Carrito</button>
        </div>
        <div className='precioTotal'>
          <h4 >PRECIO TOTAL: $ {precioTotal()}</h4>
          </div>
        
      </div>
      <div>
          <Form cart={cart} precioTotal={precioTotal} clear={clear} obtenerIdCompra={obtenerIdCompra}></Form>
      </div>
    </div>
  )
}

export default Cart