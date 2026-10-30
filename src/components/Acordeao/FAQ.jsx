import React from 'react'
import Acordeao from './acordeao.jsx'
import './FAQ.css'
const FAQ = () => {
  return (
    <div className="corpo">
      <Acordeao  titulo='titulo 1' resposta='resposta 1'/>
      <Acordeao titulo='titulo 2' resposta='resposta 2'/>
      <Acordeao titulo='titulo 3' resposta='resposta 3'/>
    </div>
    
  )
}

export default FAQ
