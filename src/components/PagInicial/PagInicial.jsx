import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

const PagInicial = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const startQuiz = () => {
        dispatch({ type: "GO_TO_PLAYING" });
    };

    return (
        <div>
            <h2>Main Menu</h2>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};

export default PagInicial;
