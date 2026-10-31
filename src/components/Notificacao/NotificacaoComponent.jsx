import React, { useEffect } from "react";
import "./NotificacaoComponent.css";

const NotificacaoComponent = ({
  mensagem,
  tipo = "sucesso",
  fechar
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fechar();
    }, 3000);

    return () => clearTimeout(timer);
  }, [fechar]);

  return (
    <div
      className={`notificacao ${tipo}`}
      role={tipo === "erro" ? "alert" : "status"}
      aria-live={tipo === "erro" ? "assertive" : "polite"}
    >
      <span>{mensagem}</span>

      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar notificação"
      >
        <span aria-hidden="true">✕</span>
      </button>
    </div>
  );
};

export default NotificacaoComponent;