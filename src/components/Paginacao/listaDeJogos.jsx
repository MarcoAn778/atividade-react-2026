import React, { useState }from "react";
import Paginacao from "./paginacaoComponent.jsx";
import jogosMock from "../../data/jogosMock.js";
import BarraProgresso from "../BarraProgresso/barraProgressoComponent.jsx";

const ListaDeJogos = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const jogosPorPagina = 6;
  const indeceFinal = paginaAtual * jogosPorPagina;
  const indeceInicial = indeceFinal - jogosPorPagina;
  const jogosAtuais = jogosMock.slice(indeceInicial, indeceFinal);
  const totalPaginas = Math.ceil(jogosMock.length / jogosPorPagina);

  return (
    <div className="listaDeJogos">
        
        <div>
            {jogosAtuais.map((jogo) => (
              <div key={jogo.id}>
                <img src={jogo.imagem} alt={jogo.titulo} width="300" />

                <h2>{jogo.titulo}</h2>
                <p>{jogo.genero}</p>
                <p>{jogo.ano}</p>
                <BarraProgresso progresso={jogo.progresso} />
              </div>
            ))}
        </div>
        <Paginacao paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} totalPaginas={totalPaginas} />
    </div>
    );
};

export default ListaDeJogos;
