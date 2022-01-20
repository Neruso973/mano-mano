import { useContext, useState } from "react";

import ColorContext from "../context/ColorContext";
import photo from "../assets/img/IMG_20220119_133444.jpg";
import CurrentTask from "./currentTask";

const Suggestion = () => {
  const { color } = useContext(ColorContext);

  const [openModal, setOpenModal] = useState(false)

  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);

  const toggleCheck1 = () => {
    setCheck1(!check1);
  };

  const toggleCheck2 = () => {
    setCheck2(!check2);
  };

  const toggleCheck3 = () => {
    setCheck3(!check3);
  };

  return (
    <div className="bg-[#F5F6F7] h-screen flex justify-center">
      <div className="bg-white  h-[80%] w-[80%] flex justify-around items-center rounded-3xl mt-24 p-2">
        <div
          className={`${
            color ? "green_gradient" : "pink_gradient"
          } container_scanner `}
        >
          <img src={photo} alt="suggestion" />
        </div>
        <div
          className={`${
            color ? "green_gradient" : "pink_gradient"
          } container_scanner container_suggestion `}
        >
          <div className="text_suggestion grey_background">
            <h2 className={`${color ? "blue_text" : "green_text"}  `}>
              ManoPoto a quelques idées{" "}
              {color ? (
                <span className="green_text">brico</span>
              ) : (
                <span className="pink_text">déco</span>
              )}{" "}
              pour toi :{" "}
            </h2>

            <div className="container_text">
              <div className="flex items-center m-4">
                <div
                  onClick={toggleCheck1}
                  className={`${
                    color ? "green_gradient" : "pink_gradient"
                  } checkbox  `}
                >
                  <div className="background_checkbox grey_background">
                    {check1 ? (
                      ""
                    ) : color ? (
                      <div className="check green_gradient"></div>
                    ) : (
                      <div className="check pink_gradient"></div>
                    )}
                  </div>
                </div>
                {color ? (
                  <p className="green_gradient">
                    Mettre une étagère à niveau ?
                  </p>
                ) : (
                  <p className="pink_gradient">
                    Mettre de la couleur sur le mur
                  </p>
                )}
              </div>
              <div className="flex  items-center m-4">
                <div
                  onClick={toggleCheck2}
                  className={`${
                    color ? "green_gradient" : "pink_gradient"
                  } checkbox  `}
                >
                  <div className="background_checkbox grey_background">
                    {check2 ? (
                      ""
                    ) : color ? (
                      <div className="check green_gradient"></div>
                    ) : (
                      <div className="check pink_gradient"></div>
                    )}
                  </div>
                </div>
                {color ? (
                  <p className="green_gradient">Retouches peintures ?</p>
                ) : (
                  <p className="pink_gradient">Changer de luminaire</p>
                )}
              </div>
              <div className="flex  items-center m-4">
                <div
                  onClick={toggleCheck3}
                  className={`${
                    color ? "green_gradient" : "pink_gradient"
                  } checkbox  `}
                >
                  <div className="background_checkbox grey_background">
                    {check3 ? (
                      ""
                    ) : color ? (
                      <div className="check green_gradient"></div>
                    ) : (
                      <div className="check pink_gradient"></div>
                    )}
                  </div>
                </div>
                {color ? (
                  <p className="green_gradient">
                    Mettre une goutière cache fils ?
                  </p>
                ) : (
                  <p className="pink_gradient">Nos suggestions d’étagères</p>
                )}
              </div>
            </div>

            <div className="text-center m-12 cursor-pointer">
              <p className={`${color ? "blue_text" : "green_text"}  `}>
                D’autres envies ?
              </p>
              {color ? (
                <h2 className="green_text underline decoration-solid" onClick={()=>setOpenModal(true)}>
                  Voir la sélectionde tâches courantes et leurs solutions{" "}
                </h2>
              ) : (
                <h2 className="pink_text underline decoration-solid ">
                  Voir la sélection de meubles et déco pour le salon
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
      {openModal && <CurrentTask open={openModal} />}
    </div>
  );
};

export default Suggestion;
