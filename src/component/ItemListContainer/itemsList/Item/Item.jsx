import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({title,price,id,category,img}) => {
    
  return (
    <div className="cards">
        <img src={img} alt="" className='imagen-card'/>
        <h2 className='item-titulo'> {title}</h2>
        <Link to= {`/detail/${id}`}>
        <button>Ver detalle</button>
        </Link>
    </div>
  )
}

export default Item