import React from 'react'

const ItemDetail = ({item}) => {
    
  return (
    <div className='detail-card'>
        <img src={item.img} alt={item.title} className='detail-img'/>
        <div className='detalles'>
            <h3>{item.title}</h3>
            <b>Precio  ${item.price}</b>
            <p>Categoria : {item.category}</p>
            <p> Stock Disponible: {item.stock}</p>
        </div>    
    </div>
  )
}

export default ItemDetail