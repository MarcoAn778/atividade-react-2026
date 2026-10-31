import React, { useEffect } from "react";
import "./NotificacaoComponent.css";

const NotificacaoComponent = ({ mensagem, tipo, fechar }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fechar();
    }, 3000);

    return () => clearTimeout(timer);
  }, [fechar]);

  return (
    <div className={`notificacao ${tipo}`}>
      <span>{mensagem}</span>

      <button onClick={fechar}>
        X
      </button>
    </div>
  );
};

export default NotificacaoComponent;