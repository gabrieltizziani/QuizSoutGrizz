import React, {useState } from "react";
import "./ModalRegistro.css";
const ModalRegistro = ({ isOpenRegistro, setFechar }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const background_stye = {
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
  };

  const handleNomeChange = (e) => setNome(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha", senha);
    // Aqui você pode adicionar a lógica para manipular os dados do formulário
  };

  if (isOpenRegistro) {
    return (
      <div style={background_stye}>
        <div style={modal_style}>
          <div style={btn_fechar} onClick={setFechar}>
            X
          </div>
          <h1>Registre-se</h1>
          <div id="form">
            <form >
              <div>
                <label>
                  Nome:
                  <input
                    type="text"
                    value={nome}
                    onChange={handleNomeChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  E-mail:
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Senha:
                  <input
                    type="password"
                    value={senha}
                    onChange={handleSenhaChange}
                    required
                  />
                </label>
              </div>
              <button>Registrar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ModalRegistro;
