import level from '../assets/img/Difficulte.png';
import other from '../assets/img/ArticlesSuppBricoPlan_de_travail_47.png';
import ColorContext from '../context/ColorContext';
import { useContext } from 'react';
import article1 from '../assets/img/CartContent1.png';
import article2 from '../assets/img/CartContent2.png';
import article3 from '../assets/img/CartContent3.png';
import article4 from '../assets/img/CartContent4.png';

function StarterPackBrico() {
	const { basket, setBasket } = useContext(ColorContext);

	return (
		<div>
			<div className="mt-16 flex flex-col justify-center">
				<div className="flex justify-between bg-white">
					<div className="flex flex-col w-[40%]">
						<h2 className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl my-6  mx-10 p-2 text-white text-center">
							{' '}
							Mettre une étagère à niveau ?
						</h2>
						<iframe
							className="w-[100%] h-[40%] ml-12 mt-12"
							src="https://www.youtube.com/embed/c2NoIAvKdjk"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
						<img src={level} className="w-[50%] mx-32 my-20" />
					</div>
					<div className="relative flex flex-col w-[50%]">
						<h2 className="green_text text-2xl">Votre pack comprend: </h2>
						<div className="bg-[#F5F6F7] mb-4">
							<h3 className="color-black">Votre pack comprend :</h3>
							<img src={article1} className="mx-auto my-6" />
							<img src={article2} className="mx-auto my-6" />
							<img src={article3} className="mx-auto my-6" />
							<img src={article4} className="mx-auto my-6" />
						</div>
						<button
							onClick={() => setBasket(true)}
							className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] text-white font-bold rounded-2xl w-1/3 p-2 mt-8 hover:scale-110 transition-all absolute w-7/12 h-12 bottom-20 right-14"
						>
							Ajouter au panier
						</button>
					</div>
				</div>
			</div>
			<img src={other} className="h-[30%] m-auto" />
		</div>
	);
}

export default StarterPackBrico;
