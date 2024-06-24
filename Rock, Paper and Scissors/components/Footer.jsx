//Tera um botao que ira abrir as regras do jogo

import React, { useState } from "react";
import "../src/App.css";
import Modal from "./Modal";

function Footer() {
  const [aberto, setAberto] = useState(false);

  const handleClick = () => {
    setAberto(!aberto);
  };
  return (
    <footer>
      {" "}
      <div>
        <button onClick={handleClick}>
          {aberto ? "Fechar Regras" : "Abrir Regras"}
        </button>
        {aberto && (
          <div>
            {" "}
            <Modal />
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
