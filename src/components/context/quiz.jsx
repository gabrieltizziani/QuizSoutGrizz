import React, { useReducer, createContext } from "react";
import questions from "../../data/questions";

// Definindo as etapas do quiz
const STAGES = ["Inicial", "Menu", "EscolherNivel", "Playing", "End"];

// Estado inicial do quiz
const initialState = {
  userName: "", // Armazena o nome do usuário
  gameStage: STAGES[0], // Inicia na tela "Inicial"
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

// Função reducer para gerenciar o estado do quiz
const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };

    case "GO_TO_INICIAL":
      return {
        ...state,
        gameStage: STAGES[1], // Índice 0 corresponde ao estágio "Inicial"
      };
    case "GO_TO_MENU":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "GO_TO_ESCOLHER_NIVEL":
      return {
        ...state,
        gameStage: STAGES[2], // Agora corresponde ao estágio EscolherNivel
      };
    case "GO_TO_PLAYING":
      return {
        ...state,
        gameStage: STAGES[3],
      };
    case "EMBARALHAR_QUESTIONS":
      const embaralharQuestions = [...state.questions].sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: embaralharQuestions,
      };
    case "FILTRAR_QUESTIONS":
      const nivel = action.payload;
      const filteredQuestions = questions
        .filter((q) => q.level === nivel)
        .slice(0, 5);
      return {
        ...state,
        questions: filteredQuestions,
      };
    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[4] : state.gameStage,
        answerSelected: false,
      };

    case "NEW_GAME":
      return {
        ...initialState,
        userName: state.userName,
        gameStage: STAGES[1],
      };

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    default:
      return state;
  }
};

// Contexto do Quiz
export const QuizContext = createContext();

// Provedor de contexto do Quiz
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
