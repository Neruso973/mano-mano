import { BrowserRouter, Routes, Route } from "react-router-dom";

import Manopotocard from "./components/Manopotocard";
import "./App.css";
import "./assets/css/manopotocard.css";
import ColorContextProvider from "./context/ColorContextProvider";
import Analyse from "./components/Analyse";

function App() {
  return (
    <ColorContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Manopotocard />} />
            <Route path="/analyse" element={<Analyse />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ColorContextProvider>
  );
}

export default App;
