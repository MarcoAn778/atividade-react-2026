import React, { useState } from 'react'
import './abaComponent.css'

const AbaComponent = ({ abas }) => {
  const [abaAtiva, setAbaAtiva] = useState(abas[0].id)

  return (
    <div className="aba-container">

      <div className="abas-botoes">

        {abas.map((aba) => (
          <button
            key={aba.id}
            className={abaAtiva === aba.id ? "ativo" : ""}
            onClick={() => setAbaAtiva(aba.id)}
          >
            {aba.titulo}
          </button>
        ))}

      </div>

      <div className="conteudo-aba">

        {abas.map((aba) => (
          abaAtiva === aba.id && (
            <div key={aba.id}>
              {aba.conteudo}
            </div>
          )
        ))}

      </div>

    </div>
  )
}

export default AbaComponent