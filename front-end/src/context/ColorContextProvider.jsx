import { useState } from "react";

import ColorContext from "./ColorContext";

const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState();

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
