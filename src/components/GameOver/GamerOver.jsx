import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOver.css';
import Final from "../../img/final.png";

const GamerOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id='gameover'>
        <h2 className='tit-game'>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <img src={Final} alt="Fim de Jogo" />
        <button onClick={()=> dispatch({type: "NEW_GAME"})}>Voltar ao Início</button>
    </div>
  )
}

export default GamerOver