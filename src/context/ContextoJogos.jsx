import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const ContextoJogos = createContext();

const CHAVE_FAVORITOS = "gamehub:favoritos";

const carregarFavoritos = () => {
  try {
    const salvos = localStorage.getItem(CHAVE_FAVORITOS);

    return salvos ? JSON.parse(salvos) : [];
  } catch {
    return [];
  }
};

export const ProvedorJogos = ({ children }) => {
  const [favoritos, setFavoritos] = useState(carregarFavoritos);

  const [notificacao, setNotificacao] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
    } catch {}
  }, [favoritos]);

  const mostrarNotificacao = useCallback((mensagem, tipo = "sucesso") => {
    setNotificacao({
      id: Date.now(),
      mensagem,
      tipo,
    });
  }, []);

  const fecharNotificacao = useCallback(() => {
    setNotificacao(null);
  }, []);

  const jogoEstaFavoritado = (id) => {
    return favoritos.some((jogo) => jogo.id === id);
  };

  const favoritarJogo = (jogo) => {
    const jogoJaEstaFavoritado = jogoEstaFavoritado(jogo.id);

    setFavoritos((listaAtual) =>
      jogoJaEstaFavoritado
        ? listaAtual.filter((jogoFavorito) => jogoFavorito.id !== jogo.id)
        : [...listaAtual, jogo],
    );

    if (jogoJaEstaFavoritado) {
      mostrarNotificacao(`${jogo.titulo} foi removido dos favoritos.`, "aviso");
    } else {
      mostrarNotificacao(
        `${jogo.titulo} foi adicionado aos favoritos!`,
        "sucesso",
      );
    }
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
