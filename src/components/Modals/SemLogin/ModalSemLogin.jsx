import React from "react";
import "./ModalSemLogin.css";

const ModalSemLogin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <h2>Atenção</h2>
          <p className="txt-modal">Você precisa fazer login para iniciar o jogo.</p>
        </div>
      </div>
    </div>
  );
};

export default ModalSemLogin;
