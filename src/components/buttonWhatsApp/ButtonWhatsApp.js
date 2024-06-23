import React from 'react'
import './ButtonWhatsApp.css'

export default function ButtonWhatsApp() {
  return (
    <div className='cont-button-whats'>
        <a href="https://wa.me/5492214281440?text=Hola%20Dr.%20Farina%20Balbi%20necesito%20hacer%20una%20consulta" target="_blank" rel='noreferrer'>
            <div className="whatsapp">
            <i className="fab fa-whatsapp"></i>
            </div>
        </a>
    </div>
  )
}
