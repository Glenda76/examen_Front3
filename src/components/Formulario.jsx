import { useState } from "react"
import style from './formulario.module.css'

const Formulario = () => {
    const [nombre, setNombre]= useState('')
    const [musica, setMusica] =useState('')
    const [success, setSucces]= useState(false)
    const [fail, setFail]= useState(false)
  
    const handleSubmit= (e) =>{
        e.preventDeFault();
        if(nombre.length > 3 && musica.length > 6){
        setSucces(true)
        }else{
            setFail(true)
        }
      }
   
    
  return (
    <div>
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>Ingresa tu nombre:</label>
        <input className={style.input} type="text" value={nombre} disable={success} onChange={(e) => setNombre(e.target.value)}/>
        <label className={style.label}>Ingresa tu musica favorita:  </label>
        <input className={style.input}type="text" value= {musica} disable={success} onChange={(e) => setMusica(e.target.value)}/>
        <button className={style.button}>Mostrar Card</button>
        {fail && ' “Por favor chequea que la información sea correcta”'}
    </form>
    {success ? <p>Felicitaciones {nombre} ! {musica}</p> : null }

    </div>
  )
}

export default Formulario
