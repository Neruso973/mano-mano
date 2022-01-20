import photo from '../assets/img/IMG_20220119_133444.jpg';
import ColorBlue from '../assets/img/ColorBlue.png';
import ColorBrown from '../assets/img/ColorBrown.png';
import ColorGreen from '../assets/img/ColorGreen.png';
import ColorGrey from '../assets/img/ColorGrey.png';
import ColorOrange from '../assets/img/ColorOrange.png';
import ColorRed from '../assets/img/ColorRed.png';
import ColorTaupe from '../assets/img/ColorTaupe.png';
import ColorWhite from '../assets/img/ColorWhite.png';
import ColorYellow from '../assets/img/ColorYellow.png';

import PaintBlue from '../assets/img/PaintBlue.png';
import PaintBrown from '../assets/img/PaintBrown.png';
import PaintGreen from '../assets/img/PaintGreen.png';
import PaintGrey from '../assets/img/PaintGrey.png';
import PaintOrange from '../assets/img/PaintOrange.png';
import PaintRed from '../assets/img/PaintRed.png';
import PaintTaupe from '../assets/img/PaintTaupe.png';
import PaintWhite from '../assets/img/PaintWhite.png';
import PaintYellow from '../assets/img/PaintYellow.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Color = () => {
	const [ background, setBackground ] = useState(photo);

	return (
		<div className="bg-[#F5F6F7] h-screen flex justify-center">
			<div className="bg-white  h-[80%] w-[80%] flex justify-around items-center rounded-3xl mt-24 p-2">
				<div className="w-[30%] h-full">
					<p className="pink_gradient p-4 rounded-xl text-white font-bold text-center mt-4 mb-10">
						Simuler la couleur sur votre photo :
					</p>
					<div className="pink_gradient p- rounded-xl">
						<img className="rounded-xl p-2 w-full h-full" src={background} alt="suggestion" />
					</div>
				</div>
				<div className="w-[60%] h-full flex flex-col justify-center items-center">
					<div className="flex flex-wrap ">
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							onClick={() => setBackground(PaintBlue)}
							src={ColorBlue}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorBrown}
							onClick={() => setBackground(PaintBrown)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorGreen}
							onClick={() => setBackground(PaintGreen)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorGrey}
							onClick={() => setBackground(PaintGrey)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorOrange}
							onClick={() => setBackground(PaintOrange)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorRed}
							onClick={() => setBackground(PaintRed)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorTaupe}
							onClick={() => setBackground(PaintTaupe)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorWhite}
							onClick={() => setBackground(PaintWhite)}
							alt="color"
						/>
						<img
							className="w-1/3 h-48 hover:scale-110 transition-all"
							src={ColorYellow}
							onClick={() => setBackground(PaintYellow)}
							alt="color"
						/>
					</div>

					<button className="pink_gradient text-white font-bold rounded-2xl w-1/3 p-2 mt-8 hover:scale-110 transition-all">
						<Link to="/starterdeco">Choisir cette couleur</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Color;
