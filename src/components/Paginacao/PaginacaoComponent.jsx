import React from "react";
import "./PaginacaoComponent.css";

const PaginacaoComponent = ({
  paginaAtual,
  setPaginaAtual,
  totalPaginas
}) => {
  return (
    <div className="paginacao">
      <button
        onClick={() =>
          setPaginaAtual(paginaAtual - 1)
        }
        disabled={paginaAtual === 1}
      >
        ← Anterior
      </button>

      <span>
        Página <strong>{paginaAtual}</strong> de {totalPaginas}
      </span>

      <button
        onClick={() =>
          setPaginaAtual(paginaAtual + 1)
        }
        disabled={paginaAtual === totalPaginas}
      >
        Próxima →
      </button>
    </div>
  );
};

export default PaginacaoComponent;