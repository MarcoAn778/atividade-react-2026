import React, { useEffect, useState } from "react";
import "./AbaComponent.css";

const AbaComponent = ({
  abas,
  abaInicial,
  abaAtiva,
  aoMudarAba
}) => {
  const [abaAtualId, setAbaAtualId] = useState(
    abaAtiva || abaInicial || abas[0].id
  );


  useEffect(() => {
    if (abaAtiva) {
      setAbaAtualId(abaAtiva);
    }
  }, [abaAtiva]);

  const selecionarAba = (id) => {
    setAbaAtualId(id);

    if (aoMudarAba) {
      aoMudarAba(id);
    }
  };

  const aoApertarTecla = (evento, indice) => {
    let novoIndice = null;

    if (evento.key === "ArrowRight") {
      novoIndice = (indice + 1) % abas.length;
    }

    if (evento.key === "ArrowLeft") {
      novoIndice = (indice - 1 + abas.length) % abas.length;
    }

    if (evento.key === "Home") {
      novoIndice = 0;
    }

    if (evento.key === "End") {
      novoIndice = abas.length - 1;
    }

    if (novoIndice === null) {
      return;
    }

    evento.preventDefault();
    selecionarAba(abas[novoIndice].id);

    const botao = document.getElementById(
      `aba-${abas[novoIndice].id}`
    );

    if (botao) {
      botao.focus();
    }
  };

  const abaSelecionada =
    abas.find((aba) => aba.id === abaAtualId) || abas[0];

  return (
    <div className="aba-container">

      <div
        className="abas-botoes"
        role="tablist"
        aria-label="Filtros da biblioteca"
      >

        {abas.map((aba, indice) => {
          const ativa = abaSelecionada.id === aba.id;

          return (
            <button
              key={aba.id}
              type="button"
              role="tab"
              id={`aba-${aba.id}`}
              aria-selected={ativa}
              aria-controls={`painel-${aba.id}`}
              tabIndex={ativa ? 0 : -1}
              className={ativa ? "ativo" : ""}
              onClick={() => selecionarAba(aba.id)}
              onKeyDown={(evento) =>
                aoApertarTecla(evento, indice)
              }
            >
              {aba.titulo}
            </button>
          );
        })}

      </div>

      <div
        className="conteudo-aba"
        role="tabpanel"
        id={`painel-${abaSelecionada.id}`}
        aria-labelledby={`aba-${abaSelecionada.id}`}
        tabIndex={0}
      >
        {abaSelecionada.conteudo}
      </div>

    </div>
  );
};

export default AbaComponent;