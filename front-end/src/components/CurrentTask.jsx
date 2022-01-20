import { useContext, useState } from "react";
import ColorContext from "../context/ColorContext";

function CurrentTask( open ) {
  
  const { color } = useContext(ColorContext);

  return (
    <div className="bg-[#F5F6F7] h-screen flex justify-center">
      <div className="bg-white  h-[80%] w-[80%] flex flex-col justify-around items-center rounded-3xl mt-24 p-2">
          <div className="blue_text text-lg text-left mx-0 font-bold w-[80%]">
        <p className="my-2">
          Parce-qu’il n’est pas toujoursfacile de se retrouver seul(e) face à
          ses traveaux d’intérieur, ManoMano vous propose ses <span className="green_text">ManoTuto :</span>
        </p>
        <ul className="list-disc ml-8">
          <li>une vidéo explicative</li>
          <li>un lot pour palier à tous vos besoins lors de vos travaux</li>
          <li>des suggestions pour continuer sur votre lancée</li>
        </ul>
        <p className="my-4">
          Dites nous quel sera votre prochain projet et ManoTuto fera le reste
          😉
        </p>
        <h2 className="text-4xl mt-8">Tâches courantes :</h2>
          </div>
        <div className="flex justify-between w-[80%] text-white">
          <div className="flex flex-col">
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Mettre une étagére a niveau ? </button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Retouches peintures ? </button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Cable management ?</button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Poser une tapiserie ?</button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Changer une serrrure ?</button>
          </div>
          <div className="flex flex-col">
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Poser un luminaire ?</button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Changer un join ?</button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Réparer une porte ?</button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Changer une prise éléctrique ?</button>
            <button className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl mt-6 p-2">Changer un robinet ?</button>
          </div>
        </div>
        <input type="text" placeholder="Autre" className="rounded-3xl border-solid border-2 my-8 p-2 w-[20%]" />
      </div>
    </div>
  );
}

export default CurrentTask;
