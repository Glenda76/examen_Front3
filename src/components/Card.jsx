import React from 'react'
import style from './card.module.css'

const Card = ({datos}) => {
  return (
    <div className={style.card} >
        <h2>Tu nombre es : {datos.name}</h2>
        <h3>Tu musica favorita : {datos.music}</h3>
        
    </div>
  )
}

export default Card
