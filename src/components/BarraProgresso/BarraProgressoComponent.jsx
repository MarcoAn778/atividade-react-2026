import React from "react";
import "./BarraProgressoComponent.css";

const BarraProgressoComponent = ({ progresso }) => {
  const valor = Math.min(100, Math.max(0, Number(progresso) || 0));

  return (
    <div
      className="barra-container"
      role="progressbar"
      aria-label="Progresso do jogo"
      aria-valuenow={valor}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="barra-progresso"
        style={{ width: `${valor}%` }}
      ></div>

      <span className="porcentagem" aria-hidden="true">
        {valor}%
      </span>
    </div>
  );
};

export default BarraProgressoComponent;