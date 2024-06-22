//Tera o placar dos jogos
import { useEffect, useState } from "react";

function Header() {
  const [placar2, setPlacar2] = useState(0);

  return (
    <header>
      <h1>Placar</h1>
      <div className="times">
        <div>
          <h2>Jogador: {playerResult}</h2>
          <button onClick={() => setPlacar1(placar1 + 1)}>
            Aumentar Placar 1
          </button>
        </div>
        <div>
          <h2>Computador: {placar2}</h2>
          <button onClick={() => setPlacar2(placar2 + 1)}>
            Aumentar Placar 2
          </button>
        </div>
      </div>
    </header>
  );
}

function playerResult() {
  const [placar1, setPlacar1] = useState(0);

  return placar1;
}

export default Header;
