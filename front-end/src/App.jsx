import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Manopotocard from "./components/Manopotocard";
import Suggestion from "./components/Suggestion";
import "./App.css";
import "./assets/css/manopotocard.css";
import ColorContextProvider from "./context/ColorContextProvider";
import Analyse from "./components/Analyse";

import StarterPack from "./components/StarterPack";

function App() {
  return (
    <ColorContextProvider>
      <BrowserRouter>
        <ReactNotification />
        <Routes>
          <Route path="/" element={<Manopotocard />} />
          <Route path="/analyse" element={<Analyse />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/starter" element={<StarterPack />} />
        </Routes>
      </BrowserRouter>
    </ColorContextProvider>
  );
}

export default App;
