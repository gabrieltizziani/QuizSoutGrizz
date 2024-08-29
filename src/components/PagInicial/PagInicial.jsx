import React, { useState, useContext } from 'react';
import { QuizContext } from "../context/quiz";
import './PagInicial.css';
import ModalInstrucao from "../Modals/Instrucao/ModalInstrucao";

const PagInicial = () => {
    const [quizState, dispatch] = useContext(QuizContext); // Desestruture `dispatch` aqui
    const [openModalInstrucao, setModalInstrucao] = useState(false);

    const startQuiz = () => {
        if (quizState.userName) {
            // Se o nome do usuário estiver definido, inicie o quiz
            dispatch({ type: "GO_TO_PLAYING" });
        } else {
            // Caso contrário, exiba uma mensagem ou redirecione para login
            alert("Você deve estar logado para iniciar o quiz.");
        }
    };

    return (
        <div>
            <h2 className="titulo-menu">Olá {quizState.userName || 'Visitante'}, está preparado?</h2>
            <div id="container-menu-button">
                <button className="btn-menu" onClick={startQuiz}>Start Quiz</button>
                <br />
                <button className="btn-menu" onClick={() => setModalInstrucao(true)}>Como Jogar?</button>
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
