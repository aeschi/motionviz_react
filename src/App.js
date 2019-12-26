import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";
import Title from "./components/Title.js";
import Thing from "./components/Thing.js";

function App() {
  const test = "Hello world!";
  const onClick = () => console.log("clicked");

  return (
    <div>
      <Title title="Ueberschrift" />
      <p>{test}</p>
      <button type="button" onClick={onClick}>
        click me!
      </button>
      <Canvas>
        <Thing />
      </Canvas>
    </div>
  );
}

export default App;
