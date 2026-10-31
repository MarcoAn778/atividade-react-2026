import React, { useState } from "react";
import "./AbaComponent.css";

const AbaComponent = ({
  abas,
  abaInicial,
  aoMudarAba
}) => {
  const [abaAtiva, setAbaAtiva] = useState(
    abaInicial || abas[0].id
  );

  const selecionarAba = (aba) => {
    setAbaAtiva(aba.id);

    if (aoMudarAba) {
      aoMudarAba(aba.id);
    }
  };

  return (
    <div className="aba-container">

      <div className="abas-botoes">

        {abas.map((aba) => (
          <button
            key={aba.id}
            className={
              abaAtiva === aba.id
                ? "ativo"
                : ""
            }
            onClick={() =>
              selecionarAba(aba)
            }
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
  );
};

export default AbaComponent;