import React from 'react'
import './Item.css'

export default function Item({ nombre, descripcion, icon }) {
  return (
    <div className="card-diagonal">
        <img className='icon-card' src={icon} alt="icon" />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
    </div>
  )
}
