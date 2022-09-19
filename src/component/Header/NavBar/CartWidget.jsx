import React from 'react'
import{FaShoppingCart} from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
const CartWidget = () => {
  const {precioUnidades} = useContext( CartContext)
  return (
    <span className='icono'>
       <div className='widget-contenedor'>
       <p className='unidades'>{precioUnidades()=== 0? "": precioUnidades()} </p>
       </div>
        <FaShoppingCart/>
       
        
    </span> 
  )
}

export default CartWidget