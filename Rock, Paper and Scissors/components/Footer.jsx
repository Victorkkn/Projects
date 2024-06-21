//Tera um botao que ira abrir as regras do jogo

import React, { useState } from "react";
import "../src/App.css";

function Footer() {
  const [aberto, setAberto] = useState(false);

  const handleClick = () => {
    setAberto(!aberto);
  };
  return (
    <footer>
      {" "}
      <div>
        <button onClick={handleClick}>{aberto ? "Fechar" : "Abrir"}</button>
        {aberto && <div>Este é o texto dentro da caixa.</div>}
      </div>
    </footer>
  );
}

export default Footer;
