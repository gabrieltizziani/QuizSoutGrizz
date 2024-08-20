import "./Inicial.css";
import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import ModalEntrar from "../Modals/Entrar/ModalEntrar";
import ModalSemLogin from "../Modals/SemLogin/ModalSemLogin"; // Importe o modal

const Inicial = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [openModalEntrar, setModalEntrar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar se está logado
  const [openModalSemLogin, setModalSemLogin] = useState(false); // Estado para o modal de aviso

  const goToMenu = () => {
    if (isAuthenticated) {
      dispatch({ type: "GO_TO_MENU" });
    } else {
      setModalSemLogin(true); // Abre o modal se não estiver autenticado
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setModalEntrar(false); // Fecha o modal após o login
  };

  return (
    <div id="inicio">
      <div className="btn-autenticacao">
        <button onClick={() => setModalEntrar(true)}>Login</button>
      </div>

      <h2 className="h2-telainicial">Seja bem-vindo ao SoutGrizz</h2>
      <p className="txt-inicio">Faça login para iniciar!</p>
      <button onClick={goToMenu}>Iniciar</button>
      <div>
        <ModalEntrar
          isOpenEntrar={openModalEntrar}
          setFechar={() => setModalEntrar(false)}
          onLoginSuccess={handleLoginSuccess} // Passa a função de sucesso de login
        />
        <ModalSemLogin
          isOpen={openModalSemLogin}
          onClose={() => setModalSemLogin(false)}
        />
      </div>
    </div>
  );
};

export default Inicial;
