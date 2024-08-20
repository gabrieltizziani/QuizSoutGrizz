import React, { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import './PagInicial.css'
import ModalInstrucao from "../Modals/Instrucao/ModalInstrucao";

const PagInicial = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const [openModalInstrucao, setModalInstrucao] = useState(false);


    const startQuiz = () => {
        dispatch({ type: "GO_TO_PLAYING" });
    };

    return (
        <div>
            <h2 className="titulo-menu">Olá 'nomeUsuário' está preparado?</h2>
            <div id="container-menu-button">
            <button className="btn-menu" onClick={startQuiz}>Start Quiz</button>
            <br />
            <button className="btn-menu" onClick={()=> setModalInstrucao(true)}>Como Jogar?</button>
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
