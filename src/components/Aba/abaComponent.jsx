import React, { useState } from 'react'
import './abaComponent.css'

const AbaComponent = () => {
  const [abaAtiva, setAbaAtiva] = useState("jogos")

  return (
    <div className="aba-container">
      <div className="abas-botoes">
        <button className={abaAtiva === "jogos" ? "ativo" : ""} onClick={() => setAbaAtiva("jogos")}>Jogos</button>
        <button className={abaAtiva === "concluidos" ? "ativo" : ""} onClick={() => setAbaAtiva("concluidos")}>Concluídos</button>
        <button className={abaAtiva === "favoritos" ? "ativo" : ""} onClick={() => setAbaAtiva("favoritos")}>Favoritos</button>
      </div>
      <div className="conteudo-aba">
        {abaAtiva === "jogos" && 
          <p>Content for Jogos</p>}
        {abaAtiva === "concluidos" && 
          <p>Content for Concluídos</p>}
        {abaAtiva === "favoritos" && 
          <p>Content for Favoritos</p>}
      </div>
    </div>
  )
}

export default AbaComponent
