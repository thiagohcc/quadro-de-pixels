import { useState } from "react";
import PixelContext from "./PixelContext";

function PixelProvider({ children }) {
  const [numberOfPixels, setNumberOfPixels] = useState();
  const [numberOfColors, setNumberOfColors] = useState();
  const [currentColor, setCurrentColor] = useState();
  

  return (
    <PixelContext.Provider>
      { children }
    </PixelContext.Provider>
  )
}

export default PixelProvider;
