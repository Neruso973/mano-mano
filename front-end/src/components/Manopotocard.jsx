import { useContext, useEffect, useState } from "react";

import { Switch } from "@headlessui/react";
import ColorContext from "../context/ColorContext";

function Manopotocard() {
  const [enabled, setEnabled] = useState(true);
  const { color, setColor } = useContext(ColorContext);

  useEffect(() => {
    setColor(enabled);
  }, [enabled]);

  return (
    <div className="bg-[#F5F6F7]">
      <div className="bg-white flex">
        <img src="" alt="" />

        <div className="flex flex-col">
          <div className="text-[#22AAB3]">
            <p>ManoPoto, l’assistant photo par ManoMano</p>
            <p>
              Vous avez une tâche à réaliser mais vous ne savez pas par où
              commencer ?
            </p>
            <p>Ouvert aux suggestions {enabled ? "brico" : "déco"}? </p>
            <p>Envoyez votre photo à ManoPoto poutr commencer votre projet.</p>
          </div>
          <div className="flex flex-row">
            <h2 className="text-gradient-to-r from-[#24A6B2] to-[#00ECCD]">
              Projet Déco
            </h2>
            <div className="container mx-auto mt-20">
              <div className="ml-28">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled
                      ? "bg-gradient-to-r from-[#24A6B2] to-[#00ECCD]"
                      : "bg-gradient-to-r from-[#FFABC9] to-[#FFAD32]"
                  }
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
            </div>
            <h2>Projet Brico</h2>
          </div>
          <button
            className={
              enabled
                ? "bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] w-56 rounded-xl text-xl"
                : "bg-gradient-to-r from-[#FFABC9] to-[#FFAD32] w-56 rounded-xl text-xl"
            }
          >
            Envoyer à Mano Poto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Manopotocard;
