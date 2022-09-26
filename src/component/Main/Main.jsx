import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'

const Main = () => {
  return (
    <main className='main-container'>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/> 
        <Route path='/cart' element={<Cart/>}/> 
      </Routes>  
    </main>
  )
}

export default Main