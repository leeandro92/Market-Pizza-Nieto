import React, { useEffect, useState } from 'react'
import {products} from '../../mocks/Products'
import ItemList from './ItemsList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  
  const [productos,setProductos]=useState([])
  const {categoryId}=useParams()
useEffect(()=>{
  
  const getProducts= new Promise((res,rej)=> {
    const prodFiltrados=products.filter( (prod)=>prod.category === categoryId)
    setTimeout(()=>{res(categoryId?prodFiltrados:products)},100)
  })

  getProducts.then((data)=>{

   setProductos(data)
  })
},[categoryId])



  return (
    <div className="div-contenedor" >
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer