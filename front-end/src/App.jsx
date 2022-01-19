import { useState } from "react";

import Suggestion from "./components/Suggestion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Suggestion />
    </div>
  );
}

export default App;
