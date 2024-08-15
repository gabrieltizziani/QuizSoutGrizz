import { useState } from "react";
import { Model } from "react-modal";
import "./App.css";
import Inicial from "./components/Inicio/Inicial";
import Quiz from "./img/soutgrizz.png";
import ModalLogin from "./components/Modals/Login/ModalLogin";
import ModalRegistro from "./components/Modals/Registro/ModalRegistro";

const App = () => {
  const [openModalRegistro, setOpenModalRegistro] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  
  return (
    <div className="App">
      <div className="btn-autenticacao">
        <button onClick={() => setOpenModalRegistro (true)}>Registre-se</button>
        <button onClick={() => setOpenModalLogin (true)}>Login</button>
        <button>Continuar com Google</button>
      </div>
      <img className="logo" src={Quiz} alt="LogoQuiz" />
      <Inicial />
      <ModalRegistro isOpenRegistro={openModalRegistro} setFechar ={()=> setOpenModalRegistro(!openModalRegistro)}/>
      <ModalLogin isOpenLogin={openModalLogin} setFechar ={()=> setOpenModalLogin(!openModalLogin)}/>
    </div>
  );
};

export default App;
