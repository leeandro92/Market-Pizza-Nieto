import React from 'react'
import ItemCount from '../../../ItemCount/ItemCount'

const Item = ({title,price,stock,category,img,onAdd}) => {
    
  return (
    <div className="cards">
        <img src={img} alt="" className='imagen-card'/>
        <h2 className='item-titulo'> {title}</h2>
        <p className='item-precio'> $ {price}</p>
        <p> Categoria: {category}</p>
        <p> Stock Disponible : {stock}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default Item