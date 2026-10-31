import React, {
  useEffect,
  useState
} from "react";

import { usarJogos } from "../../context/ContextoJogos.jsx";

import Paginacao from "./PaginacaoComponent.jsx";

import jogosMock from "../../data/jogosMock.js";

import BarraProgresso from "../BarraProgresso/BarraProgressoComponent.jsx";

import "./ListaDeJogos.css";

const ListaDeJogos = ({
  filtro = "todos"
}) => {
  const [paginaAtual, setPaginaAtual] =
    useState(1);

  const {
    favoritos,
    favoritarJogo,
    jogoEstaFavoritado
  } = usarJogos();

  const jogosPorPagina = 6;

  let jogosFiltrados = jogosMock;

  if (filtro === "andamento") {
    jogosFiltrados = jogosMock.filter(
      (jogo) =>
        jogo.progresso > 0 &&
        jogo.progresso < 100
    );
  }

  if (filtro === "concluidos") {
    jogosFiltrados = jogosMock.filter(
      (jogo) => jogo.progresso === 100
    );
  }

  if (filtro === "favoritos") {
    jogosFiltrados = favoritos;
  }

  const totalPaginas =
    Math.max(
      1,
      Math.ceil(
        jogosFiltrados.length /
        jogosPorPagina
      )
    );

  useEffect(() => {
    setPaginaAtual(1);
  }, [filtro]);

  useEffect(() => {
    if (paginaAtual > totalPaginas) {
      setPaginaAtual(totalPaginas);
    }
  }, [paginaAtual, totalPaginas]);

  const indiceFinal =
    paginaAtual * jogosPorPagina;

  const indiceInicial =
    indiceFinal - jogosPorPagina;

  const jogosAtuais =
    jogosFiltrados.slice(
      indiceInicial,
      indiceFinal
    );

  return (
    <div className="lista-jogos">

      {jogosAtuais.length === 0 ? (

        <div className="lista-vazia" role="status">
          <h3>Nenhum jogo encontrado</h3>

          <p>
            Não existem jogos nessa categoria.
          </p>
        </div>

      ) : (

        <div className="jogos-grid">

          {jogosAtuais.map((jogo) => {
            const favoritado =
              jogoEstaFavoritado(jogo.id);

            return (
              <article
                className="jogo-card"
                key={jogo.id}
              >

                <div className="jogo-imagem-container">

                  <img
                    src={jogo.imagem}
                    alt={jogo.titulo}
                    loading="lazy"
                  />

                  <span className="jogo-genero">
                    {jogo.genero}
                  </span>

                </div>

                <div className="jogo-conteudo">

                  <div className="jogo-header">
                    <h3>
                      {jogo.titulo}
                    </h3>

                    <span>
                      {jogo.ano}
                    </span>
                  </div>

                  <div className="progresso-titulo">
                    <span>
                      Progresso
                    </span>

                    <span>
                      {jogo.progresso}%
                    </span>
                  </div>

                  <BarraProgresso
                    progresso={
                      jogo.progresso
                    }
                  />

                  <button
                    type="button"
                    className={
                      favoritado
                        ? "botao-favorito ativo"
                        : "botao-favorito"
                    }
                    aria-pressed={favoritado}
                    aria-label={
                      favoritado
                        ? `Remover ${jogo.titulo} dos favoritos`
                        : `Favoritar ${jogo.titulo}`
                    }
                    onClick={() =>
                      favoritarJogo(jogo)
                    }
                  >
                    <svg
                      className="icone-favorito"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill={
                        favoritado
                          ? "currentColor"
                          : "none"
                      }
                    >
                      <path
                        d="M20.8 4.6C19.9 3.6 18.6 3 17.2 3C15.2 3 13.4 4.1 12 5.7C10.6 4.1 8.8 3 6.8 3C5.4 3 4.1 3.6 3.2 4.6C1.2 6.8 1.4 10.2 3.4 12.3L12 21L20.6 12.3C22.6 10.2 22.8 6.8 20.8 4.6Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {favoritado
                      ? "Favoritado"
                      : "Favoritar"}
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      )}

      {jogosFiltrados.length >
        jogosPorPagina && (

        <Paginacao
          paginaAtual={paginaAtual}
          setPaginaAtual={
            setPaginaAtual
          }
          totalPaginas={
            totalPaginas
          }
        />

      )}

    </div>
  );
};

export default ListaDeJogos;