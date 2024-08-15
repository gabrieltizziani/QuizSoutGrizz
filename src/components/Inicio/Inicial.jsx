import './Inicial.css';
import { useContext } from "react";
import { useState } from "react";
import { QuizContext } from "../context/quiz";
import ModalLogin from "../Modals/Login/ModalLogin";
import ModalRegistro from "../Modals/Registro/ModalRegistro";

const Inicial = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const [openModalRegistro, setOpenModalRegistro] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);

  return (
    <div id='inicio'>
      <div className="btn-autenticacao">
        <button onClick={() => setOpenModalRegistro(true)}>Registre-se</button>
        <button onClick={() => setOpenModalLogin(true)}>Login</button>
        <button>Continuar com Google</button>
      </div>
      <h2>Seja bem-vindo ao SoutGrizz</h2>
      <p>Clique no botão para começar!</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <div>
        <ModalRegistro isOpenRegistro={openModalRegistro} setFechar={() => setOpenModalRegistro(false)} />
        <ModalLogin isOpenLogin={openModalLogin} setFechar={() => setOpenModalLogin(false)} />
      </div>
    </div>
  );
};

export default Inicial;
