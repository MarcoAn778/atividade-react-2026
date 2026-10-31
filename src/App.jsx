import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";
import Favoritos from "./pages/Favoritos.jsx";

import NavbarComponent from "./components/Navbar/NavbarComponent.jsx";
import NotificacaoComponent from "./components/Notificacao/NotificacaoComponent.jsx";

import { usarJogos } from "./context/ContextoJogos.jsx";

const App = () => {
  const {
    notificacao,
    fecharNotificacao
  } = usarJogos();

  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/favoritos"
          element={<Favoritos />}
        />
      </Routes>

      {notificacao && (
        <NotificacaoComponent
          mensagem={notificacao.mensagem}
          tipo={notificacao.tipo}
          fechar={fecharNotificacao}
        />
      )}
    </>
  );
};

export default App;