import React from 'react'
import {Item} from './Item/Item'



export const ItemList = ({productos}) => {
  return (
    <div className='contenedor-card'>
        {
            productos.map((producto)=>
                <Item key={producto.id} id={producto.id}title={producto.title}   img={producto.img}  />  
            )
        }
    </div>
  )
}

