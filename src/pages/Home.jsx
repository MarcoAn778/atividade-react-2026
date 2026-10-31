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