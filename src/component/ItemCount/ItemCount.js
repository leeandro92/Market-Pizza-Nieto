import React,{useState} from 'react'

const ItemCount = ({stock,initial,onAdd}) => {
    const[contador,setContador]=useState(initial)

    const sumar = ()=> {
        if (contador < stock) {
            setContador(contador+1) 
        }
        else {
            alert ("Maximo stock")
        }
    }
    const restar = ()=> {
        setContador(contador-1)
        if (contador === initial) {
            setContador(initial)
        }
    }
  return (
    <div className='contenedorContador'>
        <div className='contador'>
            <button className='boton-contador' onClick={sumar}>+</button>
            <p className='texto-contador'>{contador}</p>
            <button className='boton-contador' onClick={restar}>-</button>
        </div>
        <div className='contenedorBotonCarro'>
            <button className='boton-carro' onClick={onAdd}>Agregar al Carro</button>
        </div>   
    </div>
  )
}

export default ItemCount