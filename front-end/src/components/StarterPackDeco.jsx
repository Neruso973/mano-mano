import level from "../assets/img/difficulteDeco.png";
import other from "../assets/img/ArticlesSuppDecoPlan_de_travail_54_copie.png";
import ColorContext from "../context/ColorContext";
import { useContext } from "react";
import article1 from "../assets/img/CartContentDeco1.png";
import article2 from "../assets/img/CartContentDeco2.png";
import article3 from "../assets/img/CartContentDeco3.png";
import article4 from "../assets/img/CartContentDeco4.png";
import article5 from "../assets/img/CartContentDeco5.png";

function StarterPackDeco() {
  const { basket, setBasket } = useContext(ColorContext);

  return (
    <div>
      <div className="mt-16 flex flex-col justify-center">
        <div className="flex justify-between bg-white">
          <div className="flex flex-col w-[50%] items-center">
            <h2 className="pink_gradient w-96  rounded-xl text-xl my-6  mx-10 p-2 text-white text-center">
              {" "}
              Peindre un mur ?
            </h2>
            <iframe
              className="w-[80%] h-[40%] ml-12 mt-12"
              src="https://www.youtube.com/embed/dbPJ7u9ncoo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <img src={level} className="w-[40%] mx-32 my-20" />
          </div>
          <div className="relative flex flex-col w-[50%]">
            <h2 className="text-[#FFABC9] text-2xl font-bold">
              Votre pack comprend:{" "}
            </h2>
            <div className="bg-[#F5F6F7] mb-4">
              <img src={article1} className="mx-auto my-6" />
              <img src={article2} className="mx-auto my-6" />
              <img src={article3} className="mx-auto my-6" />
              <img src={article4} className="mx-auto my-6" />
              <img src={article5} className="mx-auto my-6" />
            </div>
            <button className="pink_gradient text-white font-bold rounded-2xl w-52 p-2 mt-8 hover:scale-110 transition-all absolute h-12 bottom-16 right-64">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <img src={other} className="h-[30%] m-auto" />
    </div>
  );
}

export default StarterPackDeco;
