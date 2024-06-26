//Tera o placar dos jogos
import { useEffect, useState } from "react";

function Header() {
  const [placar1, setPlacar1] = useState(0);

  return (
    <header>
      <h1>Placar</h1>
      <div className="times">
        <div>
          <h2>Jogador: {placar1}</h2>
          <button onClick={() => setPlacar1(placar1 + 1)}>
            Aumentar Placar 1
          </button>
        </div>
        <div>
          <h2>Computador: </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
