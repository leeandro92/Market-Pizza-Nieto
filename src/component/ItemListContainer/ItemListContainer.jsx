import React, { useEffect, useState } from 'react'
import {products} from '../../mocks/Products'
import ItemList from './ItemsList/ItemList'
import { useParams } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";


const ItemListContainer = () => {
  
  const [productos,setProductos]=useState([])
  const [isLoading,setIsLoading] =useState(false)
  const {categoryId}=useParams()
useEffect(()=>{
  setIsLoading(true)
  const getProducts= new Promise((res,rej)=> {
    const prodFiltrados=products.filter( (prod)=>prod.category === categoryId)
    setTimeout(()=>{res(categoryId?prodFiltrados:products)},1000)
  })

  getProducts.then((data)=>{

   setProductos(data)
   setIsLoading(false)
  })
  
},[categoryId])



  return (
    <div style={{width:"100%"}}>
      {
        isLoading ? 
         <div className='div-productos'>
            <BeatLoader className='div-productos' color={"black"}  size={50} />
         </div>
        :
           <ItemList productos={productos}/>
      }
        
    </div>
  )
}

export default ItemListContainer