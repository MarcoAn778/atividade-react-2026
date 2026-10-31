import React, {
  createContext,
  useContext,
  useState
} from "react";

const ContextoJogos = createContext();

export const ProvedorJogos = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const [notificacao, setNotificacao] = useState(null);

  const mostrarNotificacao = (mensagem, tipo = "sucesso") => {
    setNotificacao({
      mensagem,
      tipo,
    });
  };

  const fecharNotificacao = () => {
    setNotificacao(null);
  };

  const favoritarJogo = (jogo) => {
    const jogoJaEstaFavoritado = favoritos.some(
      (jogoFavorito) => jogoFavorito.id === jogo.id
    );

    if (jogoJaEstaFavoritado) {
      const novaListaDeFavoritos = favoritos.filter(
        (jogoFavorito) => jogoFavorito.id !== jogo.id
      );

      setFavoritos(novaListaDeFavoritos);

      mostrarNotificacao(
        `${jogo.titulo} foi removido dos favoritos.`,
        "aviso"
      );

    } else {
      setFavoritos([
        ...favoritos,
        jogo
      ]);

      mostrarNotificacao(
        `${jogo.titulo} foi adicionado aos favoritos!`,
        "sucesso"
      );
    }
  };

  const jogoEstaFavoritado = (id) => {
    return favoritos.some(
      (jogo) => jogo.id === id
    );
  };

  return (
    <ContextoJogos.Provider
      value={{
        favoritos,
        favoritarJogo,
        jogoEstaFavoritado,

        notificacao,
        mostrarNotificacao,
        fecharNotificacao,
      }}
    >
      {children}
    </ContextoJogos.Provider>
  );
};

export const usarJogos = () => {
  return useContext(ContextoJogos);
};