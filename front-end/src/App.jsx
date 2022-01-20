import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Manopotocard from "./components/Manopotocard";
import Suggestion from "./components/Suggestion";
import "./App.css";
import "./assets/css/manopotocard.css";
import ColorContextProvider from "./context/ColorContextProvider";
import Analyse from "./components/Analyse";

function App() {
  return (
    <ColorContextProvider>
      <BrowserRouter>
        <ReactNotification />
        <Routes>
          <Route path="/" element={<Manopotocard />} />
          <Route path="/analyse" element={<Analyse />} />
<<<<<<< HEAD
          <Route path="/suggestion" element={<Suggestion />} />
=======
>>>>>>> aacddb21668bc5d5bdfd8bb91f7fa1f846fbf9e8
        </Routes>
      </BrowserRouter>
    </ColorContextProvider>
  );
}

export default App;
