import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Main = () => {
  return (
    <main className='main-container'>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </main>
  )
}

export default Main