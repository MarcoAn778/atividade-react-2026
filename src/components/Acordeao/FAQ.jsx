import React, { useState } from "react";
import Acordeao from "./AcordeaoComponent.jsx";
import "./FAQ.css";

const FAQ = () => {
  const [acordeaoAberto, setAcordeaoAberto] = useState(null);

  const alternarAcordeao = (indice) => {
    if (acordeaoAberto === indice) {
      setAcordeaoAberto(null);
    } else {
      setAcordeaoAberto(indice);
    }
  };

  const perguntas = [
    {
      titulo: "Como adiciono um jogo aos favoritos?",
      resposta:
        "Na biblioteca, clique no botão Favoritar localizado no card do jogo. Ele ficará disponível também na página de favoritos.",
    },
    {
      titulo: "O que significa a barra de progresso?",
      resposta:
        "A barra representa o percentual de progresso realizado em cada jogo, variando de 0% até 100%.",
    },
    {
      titulo: "Posso remover um jogo dos favoritos?",
      resposta:
        "Sim. Clique novamente no botão Favoritado ou acesse a página de favoritos e escolha remover o jogo.",
    },
    {
      titulo: "Os favoritos continuam disponíveis em outras páginas?",
      resposta:
        "Sim. Os favoritos utilizam um estado global com Context API, permitindo que os dados sejam compartilhados entre diferentes páginas e componentes. Eles também ficam salvos no navegador, então continuam aqui mesmo após recarregar a página.",
    },
  ];

  return (
    <div className="corpo">

      {perguntas.map((pergunta, indice) => (
        <Acordeao
          key={indice}
          id={`faq-${indice}`}
          titulo={pergunta.titulo}
          resposta={pergunta.resposta}
          aberto={acordeaoAberto === indice}
          aoAlternar={() => alternarAcordeao(indice)}
        />
      ))}

    </div>
  );
};

export default FAQ;