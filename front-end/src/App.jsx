import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Manopotocard from './components/Manopotocard';
import Suggestion from './components/Suggestion';
import Color from './components/Color';
import './App.css';
import './assets/css/manopotocard.css';
import ColorContextProvider from './context/ColorContextProvider';
import Analyse from './components/Analyse';
import Basket from './components/Basket';
import StarterPack from './components/StarterPack';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
	return (
		<ColorContextProvider>
			<BrowserRouter>
				<ReactNotification />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/manopoto" element={<Manopotocard />} />
					<Route path="/analyse" element={<Analyse />} />
					<Route path="/suggestion" element={<Suggestion />} />
					<Route path="/starter" element={<StarterPack />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/color" element={<Color />} />
				</Routes>
			</BrowserRouter>
		</ColorContextProvider>
	);
}

export default App;
