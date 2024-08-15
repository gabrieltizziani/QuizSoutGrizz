
import "./App.css";
import Inicial from "./components/Inicio/Inicial";
import Quiz from "./img/soutgrizz.png";
import { useContext, useEffect } from "react";
import { QuizContext } from "./components/context/quiz";
import Question from "./components/Questions/Question";

const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(()=>{
    dispatch({type: "EMBARALHAR_QUESTIONS"})
  }, []);

  return (
    
    <div className="App">
      <img className="logo" src={Quiz} alt="LogoQuiz" />
      {quizState.gameStage === "Start" && <Inicial/>}
      {quizState.gameStage === "Playing" && <Question/>}
    </div>
  );
};

export default App;
