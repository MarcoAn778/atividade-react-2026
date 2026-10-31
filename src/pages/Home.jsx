import React, { useState } from "react";
import { useNavigate } from "react-router";

import "./Home.css";

import FAQ from "../components/Acordeao/FAQ.jsx";
import ListaDeJogos from "../components/Paginacao/ListaDeJogos.jsx";
import AbaComponent from "../components/Aba/AbaComponent.jsx";
import MenuSuspensoComponent from "../components/MenuSuspenso/MenuSuspensoComponent.jsx";

const Home = () => {
  const [filtroJogos, setFiltroJogos] = useState("todos");

  const navegar = useNavigate();

  const itensMenu = [
    {
      id: "todos",
      titulo: "Todos os jogos",
      acao: () => {
        setFiltroJogos("todos");
      },
    },
    {
      id: "andamento",
      titulo: "Em andamento",
      acao: () => {
        setFiltroJogos("andamento");
      },
    },
    {
      id: "concluidos",
      titulo: "Concluídos",
      acao: () => {
        setFiltroJogos("concluidos");
      },
    },
    {
      id: "pagina-favoritos",
      titulo: "Ver página de favoritos",
      acao: () => {
        navegar("/favoritos");
      },
    },
  ];

  return (
    <main className="home-container">

      <header className="home-header">

        <span className="home-badge">

          <svg
            className="home-badge-icone"
            viewBox="0 0 24 24"
            fill="none"
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

          SUA CENTRAL DE JOGOS

        </span>

        <h1>
          Bem-vindo ao{" "}
          <span>GameHub</span>
        </h1>

        <p>
          Organize sua biblioteca,
          acompanhe seu progresso
          e salve seus jogos favoritos
          em um só lugar.
        </p>

      </header>

      <section
        className="secao-teste"
        aria-labelledby="titulo-menu"
      >

        <div className="secao-titulo">

          <span className="secao-tag">
            ATALHOS
          </span>

          <h2 id="titulo-menu">
            Menu da Biblioteca
          </h2>

          <p>
            Acesse rapidamente
            diferentes áreas da sua
            coleção.
          </p>

        </div>

        <MenuSuspensoComponent
          itemSelecionado={filtroJogos}
          menu={{
            titulo: "Filtrar jogos",
            itens: itensMenu,
          }}
        />

      </section>

      <section
        className="secao-teste"
        aria-labelledby="titulo-biblioteca"
      >

        <div className="secao-titulo">

          <span className="secao-tag">
            BIBLIOTECA
          </span>

          <h2 id="titulo-biblioteca">
            Meus Jogos
          </h2>

          <p>
            Confira seus jogos,
            acompanhe o progresso
            e adicione seus favoritos.
          </p>

        </div>


        <AbaComponent
          abaAtiva={filtroJogos}
          aoMudarAba={setFiltroJogos}
          abas={[
            {
              id: "todos",
              titulo: "Todos",
              conteudo:
                "Todos os jogos disponíveis na biblioteca.",
            },
            {
              id: "andamento",
              titulo: "Em andamento",
              conteudo:
                "Jogos que ainda possuem progresso pendente.",
            },
            {
              id: "concluidos",
              titulo: "Concluídos",
              conteudo:
                "Jogos que chegaram a 100% de progresso.",
            },
            {
              id: "favoritos",
              titulo: "Favoritos",
              conteudo:
                "Jogos adicionados à sua lista de favoritos.",
            },
          ]}
        />


        <ListaDeJogos
          filtro={filtroJogos}
        />

      </section>

      <section
        className="secao-teste"
        aria-labelledby="titulo-faq"
      >

        <div className="secao-titulo">

          <span className="secao-tag">
            AJUDA
          </span>

          <h2 id="titulo-faq">
            Perguntas Frequentes
          </h2>

          <p>
            Tire algumas dúvidas
            sobre o funcionamento
            do GameHub.
          </p>

        </div>

        <FAQ />

      </section>

    </main>
  );
};

export default Home;