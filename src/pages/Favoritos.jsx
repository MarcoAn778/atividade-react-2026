import React from "react";

import { usarJogos } from "../context/ContextoJogos.jsx";
import BarraProgresso from "../components/BarraProgresso/BarraProgressoComponent.jsx";

import "./Favoritos.css";

const Favoritos = () => {
  const {
    favoritos,
    favoritarJogo
  } = usarJogos();

  return (
    <main className="pagina-favoritos">

      <header className="favoritos-header">
        <span>MINHA COLEÇÃO</span>

        <h1>Jogos Favoritos</h1>

        <p>
          {favoritos.length === 0
            ? "Sua coleção de favoritos está vazia."
            : `${favoritos.length} jogo(s) na sua coleção.`}
        </p>
      </header>

      {favoritos.length === 0 ? (

        <div className="favoritos-vazio">

          <div className="icone-vazio">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.5 8H16.5C19.2 8 21 10.1 21 12.6V15.2C21 17.3 19.6 18.5 18.2 18.5C16.9 18.5 16.2 17.7 15.4 16.8L14.5 15.8H9.5L8.6 16.8C7.8 17.7 7.1 18.5 5.8 18.5C4.4 18.5 3 17.3 3 15.2V12.6C3 10.1 4.8 8 7.5 8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M8 11V14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M6.5 12.5H9.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="15.5"
                cy="11.5"
                r="1"
                fill="currentColor"
              />

              <circle
                cx="17.5"
                cy="13.5"
                r="1"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2>Nenhum favorito ainda</h2>

          <p>
            Favorite jogos na página inicial para encontrá-los aqui.
          </p>

        </div>

      ) : (

        <div className="favoritos-grid">

          {favoritos.map((jogo) => (
            <article
              key={jogo.id}
              className="jogo-card"
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
                  <h3>{jogo.titulo}</h3>

                  <span>{jogo.ano}</span>
                </div>

                <BarraProgresso
                  progresso={jogo.progresso}
                />

                <button
                  type="button"
                  className="remover-favorito"
                  aria-label={`Remover ${jogo.titulo} dos favoritos`}
                  onClick={() => favoritarJogo(jogo)}
                >
                  <svg
                    className="icone-favorito"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.8 4.6C19.9 3.6 18.6 3 17.2 3C15.2 3 13.4 4.1 12 5.7C10.6 4.1 8.8 3 6.8 3C5.4 3 4.1 3.6 3.2 4.6C1.2 6.8 1.4 10.2 3.4 12.3L12 21L20.6 12.3C22.6 10.2 22.8 6.8 20.8 4.6Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  Remover dos favoritos
                </button>

              </div>

            </article>
          ))}

        </div>

      )}

    </main>
  );
};

export default Favoritos;