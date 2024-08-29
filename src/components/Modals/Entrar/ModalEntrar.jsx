import React, { useState, useContext } from "react";
import "./ModalEntrar.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { QuizContext } from "../../context/quiz";


const ModalEntrar = ({ isOpenEntrar, setFechar, onLoginSuccess }) => {
  const [name, setName] = useState("");
  const [, dispatch] = useContext(QuizContext); // Usa o contexto para atualizar o estado global

  const background_style = {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgb(0,0,0, 0.7)",
    zIndex: "1000",
  };

  const modal_style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "100px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  };

  const btn_fechar = {
    cursor: "pointer",
    top: "5px",
    right: "15px",
    gap: "10px",
    position: "absolute",
    display: "flex",
    color: "black",
  };

  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", name);
    dispatch({ type: "SET_USER_NAME", payload: name }); // Atualiza o nome do usuário no estado global
    onLoginSuccess(); // Chama a função de sucesso de login
  };

  const responseGoogle = (response) => {
    const credential = response.credential;
    if (credential) {
      try {
        const decoded = jwtDecode(credential);
        const userName = decoded.name || ""; // Obtém o nome do usuário do token
        console.log(decoded);
        dispatch({ type: "SET_USER_NAME", payload: userName }); // Atualiza o nome do usuário no estado global
        onLoginSuccess(); // Chama a função de sucesso de login após o Google login
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
      console.log("No credential provided");
    }
  };

  if (isOpenEntrar) {
    return (
      <GoogleOAuthProvider clientId="109803099829-fo8ih7i6d5gd6bdvdj8pdsio1k0qrgp7.apps.googleusercontent.com">
        <div style={background_style}>
          <div style={modal_style}>
            <div style={btn_fechar} onClick={setFechar}>
              X
            </div>
            <h1>Login</h1>
            <div id="form">
              <form onSubmit={handleSubmit}>
                <h2 className="subtitulo">Convidado</h2>
                <div>
                  <label>
                    Nome de Usuário:
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </label>
                </div>
                <div className="line-container">
                  <hr className="line" />
                  <span className="line-text">ou</span>
                  <hr className="line" />
                </div>
                <div>
                  <GoogleLogin
                    buttonText="Continuar com Google"
                    onSuccess={responseGoogle}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    className="btn-google"
                  />
                </div>
                <button type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    );
  }
  return null;
};

export default ModalEntrar;