// components/EscolherNivel/EscolherNivel.js
import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './EscolherNivel.css';

const EscolherNivel = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const handleNivelSelecionado = (nivel) => {
        dispatch({ type: 'SET_NIVEL', payload: nivel });
        dispatch({ type: 'FILTRAR_QUESTIONS', payload: nivel });
        dispatch({ type: 'GO_TO_PLAYING' });  
    };

    const handleVoltarPagInicial = () => {
        dispatch({ type: 'GO_TO_INICIAL' });  // Despacha a ação para voltar à página inicial
    };

    return (
        <div id='escolhaNivel'>
            <h2 className='h2-escolha'>Escolha o Nível:</h2>
            <button className='btn-escolha' onClick={() => handleNivelSelecionado('Iniciante')}>Iniciante</button>
            <button className='btn-escolha' onClick={() => handleNivelSelecionado('Intermediário')}>Intermediário</button>
            <button className='btn-escolha' onClick={() => handleNivelSelecionado('Avançado')}>Avançado</button>
            <button className='btn-escolha' onClick={handleVoltarPagInicial}>Voltar à Pagina Inicial</button>
        </div>
    );
};

export default EscolherNivel;