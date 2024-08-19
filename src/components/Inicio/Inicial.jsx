import './Inicial.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useContext, useState } from "react";
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

  const responseGoogle = (response) => {
    const credential = response.credential;
    if (credential) {
      try {
        const decoded = jwtDecode(credential);
        console.log(decoded);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    } else {
      console.log('No credential provided');
    }
  };

  return (
    <GoogleOAuthProvider clientId="109803099829-fo8ih7i6d5gd6bdvdj8pdsio1k0qrgp7.apps.googleusercontent.com">
      <div id='inicio'>
        <div className="btn-autenticacao">
          <button onClick={() => setOpenModalRegistro(true)}>Registre-se</button>
          <button onClick={() => setOpenModalLogin(true)}>Login</button>
          <button>Convidado</button>
          <GoogleLogin
            buttonText="Continuar com Google"
            onSuccess={responseGoogle}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        
        <h2>Seja bem-vindo ao SoutGrizz</h2>
        <p>Faça login para iniciar!</p>
        <button onClick={goToMenu}>Iniciar</button>
        <div>
          <ModalRegistro isOpenRegistro={openModalRegistro} setFechar={() => setOpenModalRegistro(false)} />
          <ModalLogin isOpenLogin={openModalLogin} setFechar={() => setOpenModalLogin(false)} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Inicial;
