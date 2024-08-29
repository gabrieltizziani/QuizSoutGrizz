import "./App.css";
import Inicial from "./components/Inicio/Inicial";
import Quiz from "./img/logoatt.png";
import { useContext, useEffect } from "react";
import { QuizContext } from "./components/context/quiz";
import Question from "./components/Questions/Question";
import GamerOver from "./components/GameOver/GamerOver";
import PagInicial from "./components/PagInicial/PagInicial";
import EscolherNivel from "./components/EscolherNivel/EscolherNivel";

const App = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        if (quizState.gameStage === "Menu") {
            dispatch({ type: "EMBARALHAR_QUESTIONS" });
        }
    }, [dispatch, quizState.gameStage]);

    return (
        <div className="App">
            <img className="logo" src={Quiz} alt="" />
            {quizState.gameStage === "Inicial" && <Inicial />}
            {quizState.gameStage === "Menu" && <PagInicial />}
            {quizState.gameStage === "EscolherNivel" && <EscolherNivel />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GamerOver />}
        </div>
    );
};

export default App;
