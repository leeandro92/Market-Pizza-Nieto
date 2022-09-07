import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
    const onAdd=()=>{
      alert("Se ha agregado al carrito")
    }
  return (
    <div className='detail-card'>
        <img src={item.img} alt={item.title} className='detail-img'/>
        <div className='detalles'>
            <h3>{item.title}</h3>
            <b>Precio  ${item.price}</b>
            <p>Categoria : {item.category}</p>
            <p> Stock Disponible: {item.stock}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>    
    </div>
  )
}

export default ItemDetail