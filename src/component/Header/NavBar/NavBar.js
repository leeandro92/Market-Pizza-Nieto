import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

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
                <Link to="/" className='enlace'>Productos</Link>
            </li>
            <li>
                <Link to="/category/Pizzas" className='enlace'>Pizzas</Link>
            </li>
            <li>
            <Link to="/category/Bebidas" className='enlace'>Bebidas</Link>
            </li>
            <li>
            <Link to="/category/Postres" className='enlace'>Postres</Link>
            </li>
        </ul>
        <Link to="/cart"><CartWidget/></Link>
        
    </nav>
  )
}
export default NavBar
