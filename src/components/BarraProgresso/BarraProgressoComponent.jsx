import React from 'react'
import './BarraProgressoComponent.css'

const BarraProgressoComponent = ({progresso}) => {
  return (
    <div className="barra-container">
        <div className="barra-progresso" style={{ width: `${progresso}%` }}></div>
        <span className="porcentagem">{progresso}%</span>
    </div>
  )
}

export default BarraProgressoComponent
