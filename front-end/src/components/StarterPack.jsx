import details from "../assets/img/DetailPackPlan_de_travail_34.png";
import level from "../assets/img/Difficulte.png";

function StarterPack() {
  return (
    <div className="bg-[#F5F6F7] h-screen flex justify-center">
      <div className="flex justify-between bg-white">
        <div className="flex flex-col w-[40%]">
            <h2 className="bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] rounded-xl text-xl my-6  mx-10 p-2 text-white text-center"> Mettre une étagère à niveau ?</h2>
            <div className="w-[100%] h-[40%] bg-black my-6 mx-8"></div>
            <img src={level} alt="" className="w-[50%] mx-24 my-4"/>
        </div>
        <div className="flex flex-col w-[50%]">
            <h2 className="green_text text-2xl">Votre pack comprend: </h2>
            <img src={details} alt="" />
        </div>
      </div>
    </div>
  );
}

export default StarterPack;
