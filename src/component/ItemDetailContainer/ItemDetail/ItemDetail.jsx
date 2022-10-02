import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({item}) => {
  const [cantidad,setCantidad]= useState(0)
 
  const {addItem,obtenerCantidadProducto} =useContext(CartContext)
    
  const onAdd=(cantidadAgregada)=>{
      setCantidad(cantidadAgregada)
      addItem(item,cantidadAgregada)
    }
    const quantity =obtenerCantidadProducto(item.id)

    return (
    <div className='detail-card'>
        <img src={item.img} alt={item.title} className='detail-img'/>
        <div className='detalles'>
            <h3 style={{fontSize:"30px" ,letterSpacing:"8px",textAlign:"center"}}>{item.title}</h3>
            <b style={{fontSize:"50px"}}>  $ {item.price}</b>
            <p>{item.description}</p>
            { cantidad === 0
              ?<ItemCount stock={item.stock} initial={quantity} onAdd={onAdd}/>
              :
              <>
              <Link to="/cart" className='irAlCarro'> 
                Ir al carrito
              </Link>  
              <Link to={"/"}>
                seguir comprando
              </Link>
              </>
            }
        </div>    
    </div>
  )
}

export default ItemDetail