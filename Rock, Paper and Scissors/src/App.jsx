import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>Welcome to pedar , papel e tsesoura</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
