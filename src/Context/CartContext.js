import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const CartContext=createContext ()

const CartProvider = (props) => {
    const [cart,setCart] = useState([])
    
    const addItem = (producto,quantity) => {
        if (isInCart(producto.id)) {
            sumarCantidad(producto,quantity)   
        }
        else {
            setCart([...cart,{...producto,quantity}])
        }
    };
    const clear = () => {
        setCart([])
    }
    const isInCart = (id) => {
       return cart.some((prod)=>prod.id === id)
    }
    const obtenerCantidadProducto = (id)=> {
const product =cart.find((prod)=>prod.id === id)
    return product?.quantity
    }
    const sumarCantidad = (item,cantidad) => {
        const carritoActualizado = cart.map((prod)=>{
            if (prod.id ===item.id) {
                const productoActualizado ={
                    ...prod,
                    quantity:cantidad
                }
                return productoActualizado
            } else {
                return prod
            }
        })
        setCart(carritoActualizado)
    }
    const precioTotal = ()=> {
        let sumaTotal = 0
        cart.forEach((prod)=> {
            sumaTotal = sumaTotal + (prod.price * prod.quantity)

        })
        return sumaTotal
    }
    const precioUnidades = () => {
        let sumarUnidad = 0
        cart.forEach((prod)=> {
            sumarUnidad = sumarUnidad + (prod.quantity)

        })
        return sumarUnidad
    }
    const removeItem =(itemId)=> {
        console.log(`eliminando ${itemId}`)
       const carritoFiltrado= cart.filter((prod)=>prod.id !== itemId)
       setCart(carritoFiltrado)
    }
  return (
    <CartContext.Provider value={{cart,addItem ,clear,removeItem,obtenerCantidadProducto,precioTotal,precioUnidades}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider