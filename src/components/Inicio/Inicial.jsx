import './Inicial.css';
import Quiz from "../../img/soutgrizz.png";
import { useContext } from "react";
import { useState } from "react";
import { QuizContext } from "../context/quiz";
import ModalLogin from "../Modals/Login/ModalLogin";
import ModalRegistro from "../Modals/Registro/ModalRegistro";

const Inicial = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const [openModalRegistro, setOpenModalRegistro] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const goToMenu = () => {
    dispatch({ type: "GO_TO_MENU" });
  };

  return (
    <div id='inicio'>
      <div className="btn-autenticacao">
        <button onClick={() => setOpenModalRegistro(true)}>Registre-se</button>
        <button onClick={() => setOpenModalLogin(true)}>Login</button>
        <button>Continuar com Google</button>
      </div>
      <h1></h1>
      <h2>Seja bem-vindo ao SoutGrizz</h2>
      <p>Faça login para iniciar!</p>
      <button  onClick={goToMenu}>Iniciar</button>
      <div>
        <ModalRegistro isOpenRegistro={openModalRegistro} setFechar={() => setOpenModalRegistro(false)} />
        <ModalLogin isOpenLogin={openModalLogin} setFechar={() => setOpenModalLogin(false)} />
      </div>
    </div>
  );
};

export default Inicial;
