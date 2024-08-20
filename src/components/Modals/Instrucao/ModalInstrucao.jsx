import React from "react";
import "./ModalInstrucao.css";

const ModalInstrucao = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-background-instrucao">
      <div className="modal-content-instrucao">
        <div className="modal-header-instrucao">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <h1>Como Jogar?</h1>
        <div>
          <p className="txt-intro">
            Bem-vindo ao SoutGrizz! Nosso quiz é direcionado para você que deseja
            ampliar e testar seus conhecimentos. Vamos entender como funciona nosso quiz.
          </p>
          <p className="txt-modal">
            1. Ao apertar "Jogar", escolha o nível de dificuldade que deseja.
            <br />
            2. Assim que escolher o nível, o quiz será iniciado. Teremos 5 opções de resposta e apenas uma delas é a correta. 
            Após fazer sua escolha, prossiga para a próxima pergunta, e assim até o final.
            <br />
            3. No final, você verá sua pontuação, incluindo acertos e erros.
          </p>
          <br />
          <p className="txt-intro">
            Muito simples e fácil de jogar! Agora, vamos testar seu conhecimento e bora jogar!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalInstrucao;
