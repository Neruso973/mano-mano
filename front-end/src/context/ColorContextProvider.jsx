import { useState } from "react";

import ColorContext from "./ColorContext";

const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState();
  const [basket, setBasket] = useState( false);


  return (
    <ColorContext.Provider value={{ color, setColor, basket, setBasket }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
