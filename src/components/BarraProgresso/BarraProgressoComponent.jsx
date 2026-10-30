import React from 'react'
import './barraProgressoComponent.css'

const BarraProgresso = ({progresso}) => {
  return (
    <div className="barra-container">
        <div className="barra-progresso" style={{ width: `${progresso}%` }}></div>
        <span className="porcentagem">{progresso}%</span>
    </div>
  )
}

export default BarraProgresso
