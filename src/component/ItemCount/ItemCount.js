import React,{useState} from 'react'
import { useEffect } from 'react'

const ItemCount = ({stock,initial =1,onAdd}) => {
    const[contador,setContador]=useState(initial)
 useEffect (()=> {
    setContador(initial)
 },[initial])
    const sumar = ()=> {
        contador < stock && setContador (contador +1)
    }
    const restar = ()=> {
        if(contador > 1)
        setContador(contador -1)
        else if ( contador < 1)
        setContador(1)
        
    }
  return (
    <div className='contenedorContador'>
        <div className='contador'>
            <button className='boton-contador' onClick={sumar}>+</button>
            <p className='texto-contador'>{contador}</p>
            <button className='boton-contador' onClick={restar}>-</button>
        </div>
        <div className='contenedorBotonCarro'>
            <button className='boton-carro' onClick={()=>onAdd(contador)}>Agregar al Carro</button>
        </div>   
    </div>
  )
}

export default ItemCount