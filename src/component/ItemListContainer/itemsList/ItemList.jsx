import React from 'react'
import Item from './Item/Item'



const ItemList = ({productos}) => {
    const onAdd=()=> {
        alert ("Se ha agregado al carro")
      }
  return (
    <div className='contenedor-card'>
        {
            productos.map((producto)=>
                <Item key={producto.id} title={producto.title} price={producto.price} stock={producto.stock} category={producto.category} img={producto.img} onAdd={onAdd} />  
            )
        }
    </div>
  )
}

export default ItemList