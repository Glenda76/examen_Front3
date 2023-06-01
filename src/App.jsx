import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Card from './Components/Card'

function App() {

  const [datos, setDatos] = useState({
    name: '',
    music: '',
  })

 
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(datos.name.length > 3 ){
      setShow(true)
    
    }
  }

  return (
    <>
      <Formulario handleSubmit={handleSubmit}  setDatos={setDatos} />
      
      {show && <Card datos={datos} />}

    </>
  )
  }

export default App

 