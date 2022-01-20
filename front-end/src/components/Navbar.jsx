import React from "react";
import { Link } from "react-router-dom";

import NavbarUp from "../assets/img/NavbarUp.png";
import EmptyCart from "../assets/img/NavCartEmpty.png";
import FullCart from "../assets/img/NavCart3.png";
import Navlink01 from "../assets/img/Navlink01.png";
import Navlink02 from "../assets/img/Navlink02.png";
import Navlink03 from "../assets/img/Navlink03.png";
import Navlink04 from "../assets/img/Navlink04.png";
import Navlink05 from "../assets/img/Navlink05.png";
import Navlink06 from "../assets/img/Navlink06.png";
import Navlink07 from "../assets/img/Navlink07.png";
import Navlink08 from "../assets/img/Navlink08.png";
import Navlink09 from "../assets/img/Navlink09.png";
import Navlink10 from "../assets/img/Navlink10.png";
import Navlink11 from "../assets/img/Navlink11.png";

const Navbar = () => {
  return (
    <div className="bg-white fixed shadow w-full z-10">
      <div className="flex justify-center align-top h-16">
        <img src={NavbarUp} />
        <img src={EmptyCart} />
      </div>
      <div className="flex justify-center align-top h-10">
        <img
          src={Navlink01}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink02}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink03}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink04}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink05}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink06}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink07}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink08}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink09}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <img
          src={Navlink10}
          className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
        />
        <Link to="/manopoto">
          <img
            src={Navlink11}
            className="transition duration-300 hover:ease-in h-9 border-b-2 border-white hover:border-blue-800 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
