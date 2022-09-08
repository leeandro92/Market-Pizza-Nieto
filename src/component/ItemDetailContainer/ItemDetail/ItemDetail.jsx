import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
  const [cantidad,setCantidad]= useState(0)
    const onAdd=(cantidadAgregada)=>{
      setCantidad(cantidadAgregada)
      alert(`Se ha agregado al carrito \n Cantidad :  ${cantidadAgregada} \n Producto : ${item.title}`)
    }
  return (
    <div className='detail-card'>
        <img src={item.img} alt={item.title} className='detail-img'/>
        <div className='detalles'>
            <h3>{item.title}</h3>
            <b>Precio  ${item.price}</b>
            <p>Categoria : {item.category}</p>
            <p> Stock Disponible: {item.stock}</p>
            { cantidad === 0
              ?<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
              :<Link to="/cart"> 
                Ir al carrito
              </Link>
            }
        </div>    
    </div>
  )
}

export default ItemDetail