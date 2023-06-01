import React from "react"
import style from './formulario.module.css'

const Formulario = ({setDatos, handleSubmit}) => {

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.form}>Ingresa tu nombre:</label>
        <input className={style.input} type="text" onBlur={(e) => setDatos((prevState) => ({...prevState, name: e.target.value}))}/>
        <label className={style.form}>Grupo de musica favorita</label>
        <input className={style.input} type="text" onChange={(e) => setDatos((prevState) => ({...prevState, music: e.target.value}))}/>
        <button className={style.button}>Mostrar Informacion</button>
    </form>
  )
}

export default Formulario