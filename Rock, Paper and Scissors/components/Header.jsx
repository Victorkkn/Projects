//Tera o placar dos jogos
import { useEffect, useState } from "react";

function Header() {
  const [placar1, setPlacar1] = useState(0);
  const [placar2, setPlacar2] = useState(0);

  return (
    <div>
      <h1>Placar</h1>
      <h2>Time 1: {placar1}</h2>
      <button onClick={() => setPlacar1(placar1 + 1)}>Aumentar Placar 1</button>
      <button onClick={() => setPlacar1(placar1 - 1)}>Diminuir Placar 1</button>
      <h2>Time 2: {placar2}</h2>
      <button onClick={() => setPlacar2(placar2 + 1)}>Aumentar Placar 2</button>
      <button onClick={() => setPlacar2(placar2 - 1)}>Diminuir Placar 2</button>
    </div>
  );
}

export default Header;
