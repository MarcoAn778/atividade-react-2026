import React from "react";
import "./AcordeaoComponent.css";

const Acordeao = ({
  titulo,
  resposta,
  aberto,
  aoAlternar
}) => {
  return (
    <div className={`acordeao ${aberto ? "aberto" : ""}`}>

      <button
        onClick={aoAlternar}
        className="botao-acordeao"
      >
        <span>{titulo}</span>

        <span className="icone-acordeao">
          {aberto ? "−" : "+"}
        </span>
      </button>

      <div
        className={
          aberto
            ? "resposta-container aberto"
            : "resposta-container"
        }
      >
        <div className="resposta-conteudo">
          <div className="resposta-acordeao">
            <p>{resposta}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Acordeao;