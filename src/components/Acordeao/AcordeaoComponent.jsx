import React from "react";
import "./AcordeaoComponent.css";

const Acordeao = ({
  id,
  titulo,
  resposta,
  aberto,
  aoAlternar
}) => {
  return (
    <div className={`acordeao ${aberto ? "aberto" : ""}`}>

      <h3 className="titulo-acordeao">
        <button
          type="button"
          id={`${id}-botao`}
          onClick={aoAlternar}
          className="botao-acordeao"
          aria-expanded={aberto}
          aria-controls={`${id}-resposta`}
        >
          <span>{titulo}</span>

          <span
            className="icone-acordeao"
            aria-hidden="true"
          >
            {aberto ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={`${id}-resposta`}
        role="region"
        aria-labelledby={`${id}-botao`}
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