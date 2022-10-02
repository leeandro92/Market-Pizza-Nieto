import React from 'react'
import{BsInstagram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {BsTwitter} from  'react-icons/bs' 
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer-contenedor'>
      <div>
        <h4 className='tituloRedSocial'>Seguinos en nuestras redes sociales</h4>
      </div>
      <div className='contenedorRedesSociales'> 
        <AiFillFacebook style={{fontSize:"25px"}}/>
        <BsInstagram style={{fontSize:"25px"}}/>
        <BsTwitter style={{fontSize:"25px"}}/>
        <BsWhatsapp style={{fontSize:"25px"}}/> 
      </div>
    </div>
  )
}

export default Footer
