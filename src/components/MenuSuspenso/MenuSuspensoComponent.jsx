import React, { useState } from "react";
import "./MenuSuspensoComponent.css";

const MenuSuspensoComponent = ({
  menu,
  itemSelecionado,
  aoSelecionar
}) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const itemAtual = menu.itens.find(
    (item) => item.id === itemSelecionado
  );

  const selecionarItem = (item) => {
    if (aoSelecionar) {
      aoSelecionar(item.id);
    }

    if (item.acao) {
      item.acao();
    }

    setMenuAberto(false);
  };

  return (
    <div
      className={
        menuAberto
          ? "menu-suspenso aberto"
          : "menu-suspenso"
      }
    >
      <button
        className="botao-menu"
        onClick={() =>
          setMenuAberto(!menuAberto)
        }
      >
        <span>
          {itemAtual
            ? itemAtual.titulo
            : menu.titulo}
        </span>

        <svg
          className={
            menuAberto
              ? "icone-menu aberto"
              : "icone-menu"
          }
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={
          menuAberto
            ? "menu-dropdown aberto"
            : "menu-dropdown"
        }
      >
        <ul className="itens-menu">

          {menu.itens.map((item) => (
            <li key={item.id}>

              <button
                className={
                  itemSelecionado === item.id
                    ? "item-menu ativo"
                    : "item-menu"
                }
                onClick={() =>
                  selecionarItem(item)
                }
              >
                <span>
                  {item.titulo}
                </span>

                {itemSelecionado === item.id && (
                  <svg
                    className="icone-check"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12.5L9.5 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

              </button>

            </li>
          ))}

        </ul>
      </div>

    </div>
  );
};

export default MenuSuspensoComponent;