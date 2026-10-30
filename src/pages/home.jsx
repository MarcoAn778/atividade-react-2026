import React, { useState } from "react";
import "./home.css";

import FAQ from "../components/Acordeao/FAQ.jsx";
import ListaDeJogos from "../components/Paginacao/listaDeJogos.jsx";
import AbaComponent from "../components/Aba/abaComponent.jsx";
import MenuSuspensoComponent from "../components/MenuSuspenso/menuSuspensoComponent.jsx";
import NotificacaoComponent from "../components/Notificacao/notificacaoComponent.jsx";

const Home = () => {
  const [notificacao, setNotificacao] = useState(null);

  const mostrarNotificacao = (mensagem, tipo) => {
    setNotificacao({
      mensagem,
      tipo,
    });
  };

  return (
    <main className="home-container">

      <header className="home-header">
        <h1>Testes de Componentes</h1>

        <p>
          Página para testar os componentes desenvolvidos em React.
        </p>
      </header>

      {/* FAQ */}

      <section className="secao-teste">
        <h2>FAQ / Acordeão</h2>

        <FAQ />
      </section>


      {/* PAGINAÇÃO */}

      <section className="secao-teste">
        <h2>Lista de Jogos + Paginação</h2>

        <ListaDeJogos />
      </section>


      {/* ABAS */}

      <section className="secao-teste">
        <h2>Abas</h2>

        <AbaComponent
          abas={[
            {
              id: "jogos",
              titulo: "Jogos",
              conteudo: "Todos os meus jogos",
            },
            {
              id: "concluidos",
              titulo: "Concluídos",
              conteudo: "Jogos que já terminei",
            },
            {
              id: "favoritos",
              titulo: "Favoritos",
              conteudo: "Meus jogos favoritos",
            },
          ]}
        />
      </section>


      {/* MENU SUSPENSO */}

      <section className="secao-teste">
        <h2>Menu Suspenso</h2>

        <MenuSuspensoComponent
          menu={{
            titulo: "Biblioteca",
            itens: [
              "Todos os jogos",
              "Favoritos",
              "Concluídos",
              "Configurações",
            ],
          }}
        />
      </section>


      {/* NOTIFICAÇÕES */}

      <section className="secao-teste">
        <h2>Notificações Toast</h2>

        <div className="botoes-notificacao">

          <button
            onClick={() =>
              mostrarNotificacao(
                "Jogo adicionado aos favoritos!",
                "sucesso"
              )
            }
          >
            Testar Sucesso
          </button>

          <button
            onClick={() =>
              mostrarNotificacao(
                "Não foi possível salvar o jogo.",
                "erro"
              )
            }
          >
            Testar Erro
          </button>

          <button
            onClick={() =>
              mostrarNotificacao(
                "Você ainda não concluiu esse jogo.",
                "aviso"
              )
            }
          >
            Testar Aviso
          </button>

        </div>
      </section>


      {/* TOAST */}

      {notificacao && (
        <NotificacaoComponent
          mensagem={notificacao.mensagem}
          tipo={notificacao.tipo}
          fechar={() => setNotificacao(null)}
        />
      )}

    </main>
  );
};

export default Home;