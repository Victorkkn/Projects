//regras do jogo

import React, { useState } from "react";
import "../src/App.css";

function Modal() {
  return (
    <div>
      Regras do Jogo: Pedra ganha da tesoura (amassando-a ou quebrando-a).
      Tesoura ganha do papel (cortando-o). Papel ganha da pedra (embrulhando-a).
      Não é permitido mostrar pedra duas vezes seguidas
    </div>
  );
}

export default Modal;
