import React, { useState, useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./PagInicial.css";
import ModalInstrucao from "../Modals/Instrucao/ModalInstrucao";
import EscolherNivel from "../EscolherNivel/EscolherNivel";

const PagInicial = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [openModalInstrucao, setModalInstrucao] = useState(false);

  return (
    <div>
      <h2 className="titulo-menu">
        Olá {quizState.userName || "Visitante"}, está preparado?
      </h2>
      <div id="container-menu-button">
        <button
          className="btn-menu"
          onClick={() => dispatch({ type: "GO_TO_ESCOLHER_NIVEL" })}
        >
          Escolher Nível
        </button>
        <br />
        <button className="btn-menu" onClick={() => setModalInstrucao(true)}>
          Como Jogar?
        </button>
      </div>

      <div>
        <ModalInstrucao
          isOpen={openModalInstrucao}
          onClose={() => setModalInstrucao(false)}
        />
      </div>
    </div>
  );
};

export default PagInicial;
