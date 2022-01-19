import { useContext } from "react";
import backGreen from "../assets/img/ManoPotoBackGreen.png";
import backPink from "../assets/img/ManoPotoBackPink.png";
import ColorContext from "../context/ColorContext";

const Analyse = () => {
  const { color } = useContext(ColorContext);

  return (
    <div className="analyse_container">
      {color ? (
        <img src={backGreen} alt="chargement" />
      ) : (
        <img src={backPink} alt="chargement" />
      )}
      <div className="analyse_text">
        <p>ManoPoto</p>
        <p>Analyse ta photo</p>
        <p>photo ...</p>
      </div>
    </div>
  );
};

export default Analyse;
