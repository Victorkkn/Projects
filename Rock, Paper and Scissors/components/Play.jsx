// ira aparecer para o jogador selecionar entre as opcoes, caso tenha selecionado pedra na anterior, nao podera selecionar agora

import { useEffect, useState } from "react";
import Header from "./Header";

function Play() {
  const [selecionado, setSelecionado] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  const handleChange = (event) => {
    setSelecionado(event.target.value);
    // Gera um número aleatório entre 1 e 3
    const randomNum = Math.floor(Math.random() * 3) + 1;
    setNumeroAleatorio(randomNum);
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="radio"
            value="✊"
            checked={selecionado === "✊"}
            onChange={handleChange}
          />
          Mão fechada: ✊
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="✋"
            checked={selecionado === "✋"}
            onChange={handleChange}
          />
          Cinco dedos abertos: ✋
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="✌️"
            checked={selecionado === "✌️"}
            onChange={handleChange}
          />
          Dois dedos (como um "V"): ✌️
        </label>
      </form>
      <p>Sua Escolha: {selecionado}</p>
      {numeroAleatorio && (
        <p>Escolha do Computador: {ComputerChoice(numeroAleatorio)}</p>
      )}
    </div>
  );
}

function ComputerChoice(choice) {
  switch (choice) {
    case 1:
      return <div>✊</div>;
    case 2:
      return <div>✋</div>;
    case 3:
      return <div>✌️</div>;
  }
}

function Results(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return <div>Empate! </div>;
  }
  if (
    (playerChoice == "✊" && computerChoice == "✌️") ||
    (playerChoice == "✋" && computerChoice == "✊") ||
    (playerChoice == "✌️" && computerChoice == "✋")
  ) {
    return <div>Vitória! </div>;
  } else {
    return <div>Derrota! </div>;
  }
}

export default Play;
