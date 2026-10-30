import React, { useState } from 'react';
import './acordeaoComponent.css';

const Acordeao = ({ titulo, resposta }) => {
  const [acordeaoAberto, setAcordeaoAberto] = useState(false);

  return (
    <div className="acordeao">

      <button
        onClick={() => setAcordeaoAberto(!acordeaoAberto)}
        className="botao-acordeao"
      >
        <span>{titulo}</span>

        <span className="icone-acordeao">
          {acordeaoAberto ? '-' : '+'}
        </span>
      </button>

      {acordeaoAberto && (
        <div className="resposta-acordeao">
          <p>{resposta}</p>
        </div>
      )}

    </div>
  );
};

export default Acordeao;