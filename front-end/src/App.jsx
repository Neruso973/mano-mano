import Manopotocard from "./components/Manopotocard";
import "./App.css";
import "./assets/css/manopotocard.css";
import ColorContextProvider from "./context/ColorContextProvider";

function App() {
  return (
    <ColorContextProvider>
      <div className="App">
        <Manopotocard />
      </div>
    </ColorContextProvider>
  );
}

export default App;
