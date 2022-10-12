import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({title,id,img}) => {
    
  return (
    <div className="cards">
        <img src={img} alt="" className='imagen-card'/>
        <h2 className='item-titulo'> {title}</h2>
        <Link to= {`/detail/${id}`} className="link">
        <button className='button'>Ver detalle</button>
        </Link>
    </div>
  )
}
