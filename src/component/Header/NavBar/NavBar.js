import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='contenedorTitulo'>
        <h1 className='titulo'>Market Pizza</h1>
        <div className='contenedorImagen'>
        <img src="pizza.png" alt="" className='imagen' />
        </div>
        
      </div>
        <ul className='nav-ul'>
            <li>
                <a href="https://www.google.com.ar/?hl=es" className='enlace'target="_BLANCK">Productos</a>
            </li>
            <li>
                <a href="https://www.youtube.com/" className='enlace' target="_BLANCK">Contacto</a>
            </li>
            <li>
                <a href="https://es-la.facebook.com/" className='enlace' target="_BLANCK">Quienes Somos</a>
            </li>
            <li>
                <a href="https://es-la.facebook.com/" className='enlace' target="_BLANCK">Sucursales</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}
export default NavBar
