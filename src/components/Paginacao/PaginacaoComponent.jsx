import React from "react";
import "./PaginacaoComponent.css";

const PaginacaoComponent = ({
  paginaAtual,
  setPaginaAtual,
  totalPaginas
}) => {
  const paginas = Array.from(
    { length: totalPaginas },
    (_, indice) => indice + 1
  );

  return (
    <nav
      className="paginacao"
      aria-label="Paginação da lista de jogos"
    >
      <button
        type="button"
        className="paginacao-navegar"
        onClick={() =>
          setPaginaAtual(paginaAtual - 1)
        }
        disabled={paginaAtual === 1}
      >
        ← Anterior
      </button>

      <ul className="paginacao-numeros">

        {paginas.map((numero) => (
          <li key={numero}>
            <button
              type="button"
              className={
                numero === paginaAtual
                  ? "pagina-numero pagina-ativa"
                  : "pagina-numero"
              }
              aria-label={`Ir para a página ${numero}`}
              aria-current={
                numero === paginaAtual
                  ? "page"
                  : undefined
              }
              onClick={() =>
                setPaginaAtual(numero)
              }
            >
              {numero}
            </button>
          </li>
        ))}

      </ul>

      <span className="paginacao-info">
        Página <strong>{paginaAtual}</strong> de {totalPaginas}
      </span>

      <button
        type="button"
        className="paginacao-navegar"
        onClick={() =>
          setPaginaAtual(paginaAtual + 1)
        }
        disabled={paginaAtual === totalPaginas}
      >
        Próxima →
      </button>
    </nav>
  );
};

export default PaginacaoComponent;