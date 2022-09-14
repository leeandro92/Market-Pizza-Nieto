import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const CartContext=createContext ()

const CartProvider = (props) => {
    const [cart,setCart] = useState([])
    const addItem = (producto,quantity) => {
        if (isInCart(producto.id)) {
            sumarCantidad(producto,quantity)
            
        }else {
            setCart([...cart,{...producto,quantity}])
        }

    };
    const clear = () => {
        setCart([])
    }
    const isInCart = (id) => {
       return cart.some((prod)=>prod.id === id)
    }
    const sumarCantidad = (item,cantidad) => {
        const carritoActualizado = cart.map((prod)=>{
            if (prod.id ===item.id) {
                const productoActualizado ={
                    ...prod,
                    cantidad:prod.quantity +cantidad
                }
                return productoActualizado
            } else {
                return prod
            }
        })
        setCart(carritoActualizado)
    }
    const removeItem =(itemId)=> {
        console.log(`eliminando ${itemId}`)
       const carritoFiltrado= cart.filter((prod)=>prod.id !== itemId)
       setCart(carritoFiltrado)
    }
  return (
    <CartContext.Provider value={{cart,addItem ,clear,removeItem}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider