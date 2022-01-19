import { useState } from "react";

import Radar from "./components/Radar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Radar />
    </div>
  );
}

export default App;
