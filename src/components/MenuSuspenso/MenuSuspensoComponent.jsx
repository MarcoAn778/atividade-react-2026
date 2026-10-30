import React, { useState } from 'react'
import './menuSuspensoComponent.css'

const MenuSuspensoComponent = ({ menu }) => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="menu-suspenso">
      <button className="botao-menu" onClick={() => setMenuAberto(!menuAberto)}>
        {menu.titulo}
        <span>{menuAberto ? "▲" : "▼"}</span>
      </button>
      
      {menuAberto && (
        <ul className="itens-menu">
          {menu.itens.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MenuSuspensoComponent
