
import React from 'react'
import style from './card.module.css'
import Formulario from './Formulario'


const Card = () => {
  
  return (
    <div className={style.card}>
      <h1>Formulario</h1>
      <div className={style.datos}>
      <Formulario/>
      </div>

    </div>
  )
}

export default Card
