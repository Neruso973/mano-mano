import Manopotocard from "./components/Manopotocard";
import "./App.css";
import "./assets/css/manopotocard.css";
import ColorContextProvider from "./context/ColorContextProvider";
import Analyse from "./components/Analyse";

function App() {
  return (
    <ColorContextProvider>
      <div className="App">
        <Manopotocard />
        <Analyse />
      </div>
    </ColorContextProvider>
  );
}

export default App;
