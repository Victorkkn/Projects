import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Play from "../components/Play";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <div>
            <Play />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
