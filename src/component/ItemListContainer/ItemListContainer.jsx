import React, { useEffect, useState } from 'react'
import {products} from '../../mocks/Products'
import ItemList from './ItemsList/ItemList'


const ItemListContainer = () => {
  const [productos,setProductos]=useState([])
useEffect(()=>{
  const getProducts= new Promise((res,rej)=> {
    setTimeout(()=>{res(products)},100)
  })
  getProducts.then((data)=>{

   setProductos(data)
  })
},[])

  return (
    <div className="div-contenedor" >
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer