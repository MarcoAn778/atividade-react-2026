import React, { createContext, useContext, useState } from 'react'
const ContextoJogos = createContext()

export const  ProvedorJogos = ({ children }) => {
    const[favoritos, setFavoritos] = useState([]);

    const favoritarJogo = (jogo) => {
        const jogoJaEstaFavoritado = favoritos.some(
            (jogoFavorito) => jogoFavorito.id === jogo.id
        );
        if (jogoJaEstaFavoritado) {
            const novaListaDeFavoritos = favoritos.filter(
                (jogoFavorito) => jogoFavorito.id !== jogo.id
            );

            setFavoritos(novaListaDeFavoritos);
        } else {
            setFavoritos([
                ...favoritos, jogo
            ]);
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
                favoritarJogos,
                jogoEstaFavoritado,
            }}
        >
            { children }
        <ContextoJogos.Provider
    );
};

export const usarJogos = () => {
    return useContext(ContextoJogos);
}
