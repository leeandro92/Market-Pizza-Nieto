import React, { useEffect, useState } from 'react'
import ItemList from './ItemsList/ItemList'
import { useParams } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
import { collection,getDocs, query,where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const ItemListContainer = () => {
  
  const [productos,setProductos]=useState([])
  const [isLoading,setIsLoading] =useState(false)
  const {categoryId}=useParams()


  useEffect(()=>{
    setIsLoading(true)
  const itemCollection = collection(db,"productos")
  const q =query(itemCollection,where("category","==",`${categoryId}`))
   
  if(categoryId)  { 
    getDocs(q)
   .then((res)=>{
 const productosFiltrados =res.docs.map((prod)=>{
   return {
     id:prod.id,
     ...prod.data()
   }
 
 })
 setProductos(productosFiltrados)
 setIsLoading(false)
   })
   .catch((error)=> {
     console.log(error)
   }) 
  }
   else  {
   getDocs(itemCollection)
   .then((res)=>{
 const productos =res.docs.map((prod)=>{
   return {
     id:prod.id,
     ...prod.data()
   }
 })
 setProductos(productos)
 setIsLoading(false)
   })
   .catch((error)=> {
     console.log(error)
   })
  }
  
},[categoryId])

  return (
    
    <div style={{width:"100%"}}>
      {
        isLoading ? 
         <div className='div-productos'>
            <BeatLoader className='div-productos' color={"black"}  size={70} />
         </div>
        :
          <ItemList productos={productos} />   
      } 
    </div>
  )
}

export default ItemListContainer
