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
        <label
          style={{
            display: "inline-block",
            width: "50px",
            height: "50px",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="radio"
            value="✊"
            checked={selecionado === "✊"}
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <span style={{ fontSize: "20px", textAlign: "center" }}>✊</span>
        </label>
        <br />
        <label
          style={{
            display: "inline-block",
            width: "50px",
            height: "50px",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="radio"
            value="✋"
            checked={selecionado === "✋"}
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <span style={{ fontSize: "20px", textAlign: "center" }}>✋</span>
        </label>
        <br />
        <label
          style={{
            display: "inline-block",
            width: "50px",
            height: "50px",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="radio"
            value="✌️"
            checked={selecionado === "✌️"}
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <span style={{ fontSize: "20px", textAlign: "center" }}>✌️</span>
        </label>
      </form>
      <p>Sua Escolha: {selecionado}</p>
      {numeroAleatorio && (
        <p>Escolha do Computador: {ComputerChoice(numeroAleatorio)}</p>
      )}
      <p>
        {" "}
        Resultado: {Results(selecionado, ComputerChoice(numeroAleatorio))}{" "}
      </p>
    </div>
  );
}

function ComputerChoice(choice) {
  switch (choice) {
    case 1:
      return "✊";
    case 2:
      return "✋";
    case 3:
      return "✌️";
  }
}

function Results(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return <div>Empate! </div>;
  }
  if (
    (playerChoice === "✊" && computerChoice === "✌️") ||
    (playerChoice === "✋" && computerChoice === "✊") ||
    (playerChoice === "✌️" && computerChoice === "✋")
  ) {
    return <div>Vitória! </div>;
  } else {
    return <div>Derrota! </div>;
  }
}

export default Play;
