import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/Products'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
   
    const [item,setItem]=useState({})
   
   useEffect(()=>{
    const obtenerProducto = new Promise ((res,rej)=>{
        const unicoProducto=products.find((prod)=>prod.id === 1)
        setTimeout(()=>{
            res(unicoProducto)
        },100)
       })
       obtenerProducto.then((data)=>{
        setItem(data)
       })
        

   },[]) 
  return (
    <div className='itemDetailContainer'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer