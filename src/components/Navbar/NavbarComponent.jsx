import React from "react";
import { NavLink } from "react-router";
import { usarJogos } from "../../context/ContextoJogos.jsx";

import "./NavbarComponent.css";

const NavbarComponent = () => {
  const { favoritos } = usarJogos();

  return (
    <nav className="navbar">
      <div className="navbar-conteudo">

        <NavLink to="/" className="navbar-logo">
          <svg
            className="logo-icone"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

          <span>GameHub</span>
        </NavLink>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link ativo" : "link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              isActive ? "link ativo" : "link"
            }
          >
            Favoritos

            {favoritos.length > 0 && (
              <span className="contador-favoritos">
                {favoritos.length}
              </span>
            )}
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default NavbarComponent;