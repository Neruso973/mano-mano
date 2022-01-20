import { Link } from "react-router-dom";

import details from "../assets/img/DetailPackPlan_de_travail_34.png";
import level from "../assets/img/Difficulte.png";
import other from "../assets/img/ArticlesSuppBricoPlan_de_travail_47.png";

function StarterPack() {
  return (
    <div>
      <div className="mt-16 flex flex-col justify-center">
        <div className="flex justify-between bg-white">
          <div className="flex flex-col w-[40%]">
            <h2 className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl my-6  mx-10 p-2 text-white text-center">
              {" "}
              Mettre une étagère à niveau ?
            </h2>
            <div className="w-[100%] h-[40%] bg-black my-6 mx-8"></div>
            <img src={level} className="w-[50%] mx-24 my-4" />
          </div>
          <div className="relative flex flex-col w-[50%]">
            <h2 className="green_text text-2xl">Votre pack comprend: </h2>
            <img src={details} />
            <Link
              to="/"
              className="absolute w-7/12 h-12 bottom-20 right-14 cursor-pointer"
            ></Link>
          </div>
        </div>
      </div>
      <img src={other} className="h-[30%]" />
    </div>
  );
}

export default StarterPack;
