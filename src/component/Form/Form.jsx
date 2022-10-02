import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebaseConfig'

const Form = ({cart,precioTotal,clear,obtenerIdCompra}) => {
    const [name,setName]= useState("")
    const [phone,setPhone] =useState("")
    const [email,setEmail]=useState("")
   const handleSubmit =(event)=>{
        event.preventDefault()
        const orden ={
            buyer:{name:name,phone:phone,email:email},
            items:cart,
            total:precioTotal(),
            date:serverTimestamp()
        }
        const orderCollection= collection(db,"orden")
        addDoc(orderCollection,orden).then((res)=> {
            obtenerIdCompra(res.id)
            clear()
        })
    }
    const handleChangeName =(event) =>{  
       setName(event.target.value)
    }
    const handleChangePhone =(event)=> {
        setPhone(event.target.value)
    }
    const handleChangeEmail=(event)=>{ 
        setEmail(event.target.value)
    }
  return (
    <div className='contenedor-formulario'>
        
            
        
        <form action="" onSubmit={handleSubmit} className='formulario'>
            <h3 style={{fontSize:"60px",fontFamily:'Caveat',width:"400px" }}>Finalizar compra</h3>
            <input type="text" 
                    placeholder='Nombre' 
                    name='nombre'
                    value={name} 
                    onChange={handleChangeName}
                    required
                    className='input' />
            <input type="number" 
                    placeholder='Telefono' 
                    name='Phone' 
                    value={phone} 
                    onChange={handleChangePhone}
                    required 
                    className='input'/>
            <input type="email" 
                    placeholder='Email'
                    name='email'
                    value={email} 
                    onChange={handleChangeEmail}
                    required 
                    className='input'/>
            <button>enviar</button>
        </form>
    </div>
  )
}

export default Form