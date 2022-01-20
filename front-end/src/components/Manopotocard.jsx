import { useState, useRef, useContext, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";

import bluePhone from "../assets/img/ManoPotoPhoneGreen.png";
import pinkPhone from "../assets/img/ManoPotoPhonePink.png";
import bluePhoto from "../assets/img/ManoPotoPhotoGreen.png";
import pinkPhoto from "../assets/img/ManoPotoPhotoPink.png";
import ColorContext from "../context/ColorContext";

function Manopotocard() {
  const [enabled, setEnabled] = useState(true);
  const { color, setColor } = useContext(ColorContext);

  useEffect(() => {
    setColor(enabled);
  }, [enabled]);

  const fileInput = useRef();

  const upload = () => {
    if (enabled) {
      timeoutEnable = setTimeout(() => {
        store.addNotification({
          message: "photo importé",
          type: "info",
          insert: "top",
          container: "top-right",
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      }, 5000);
    } else {
      timeoutDisable = setTimeout(() => {
        store.addNotification({
          message: "photo importé",
          type: "warning",
          insert: "top",
          container: "top-right",
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      }, 5000);
    }
  };

  return (
    <div className="bg-[#F5F6F7] h-screen flex justify-center">
      <div className="bg-white  h-[50%] w-[70%] flex rounded-3xl mt-48 p-8">
        <img src={enabled ? bluePhone : pinkPhone} alt="" />
        <div className="flex flex-col px-12 py-8">
          <div className="text-[#2A468D] text-2xl">
            <p>ManoPoto, l’assistant photo par ManoMano</p>
            <p>
              Vous avez une tâche à réaliser mais vous ne savez pas par où
              commencer ?
            </p>
            <p>Ouvert aux suggestions {enabled ? "brico" : "déco"}? </p>
            <p>Envoyez votre photo à ManoPoto poutr commencer votre projet.</p>
          </div>
          <div className="flex flex-row">
            <h2 className="text-2xl text-[#FFAD32] fixed top-[51%] left-[50%]">
              Projet Déco
            </h2>
            <div className="container mx-auto mt-20">
              <div className="ml-96">
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
            <h2 className="text-2xl text-[#22AAB3] fixed top-[51%] left-[70%]">
              Projet Brico
            </h2>
          </div>
          <label htmlFor="photo" onClick={() => fileInput.current.click()}>
            <img
              src={enabled ? bluePhoto : pinkPhoto}
              alt=""
              className="cursor-pointer w-12 fixed left-[60%] mt-9"
              onClick={upload}
            />
            <input
              type="file"
              name="photo"
              className="hidden"
              ref={(el) => {
                fileInput.current = el;
              }}
            />
          </label>
          <Link
            to="/analyse"
            className={
              enabled
                ? "bg-gradient-to-r from-[#24A6B2] to-[#00ECCD] w-56 rounded-xl text-xl relative left-[70%] mt-4 p-2"
                : "bg-gradient-to-r from-[#FFABC9] to-[#FFAD32] w-56 rounded-xl text-xl relative left-[70%] mt-4 p-2"
            }
          >
            Envoyer à Mano Poto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Manopotocard;
