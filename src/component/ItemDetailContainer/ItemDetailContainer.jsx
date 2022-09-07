import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../mocks/Products'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
   
    const [item,setItem]=useState({})
   const {id}= useParams()
   useEffect(()=>{
    const obtenerProducto = new Promise ((res,rej)=>{
        const unicoProducto=products.find((prod)=>prod.id ===id)
        setTimeout(()=>{
            res(unicoProducto)
        },100)
       })
       obtenerProducto.then((data)=>{
        setItem(data)
       })
        

   },[id]) 
  return (
    <div className='itemDetailContainer'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer