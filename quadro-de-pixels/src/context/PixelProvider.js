import { useMemo, useState } from "react";
import PixelContext from "./PixelContext";
import PropTypes from 'prop-types';

function PixelProvider({ children }) {
  const [numberOfPixels, setNumberOfPixels] = useState();
  const [numberOfColors, setNumberOfColors] = useState();
  const [currentColor, setCurrentColor] = useState();

  const contextValue = useMemo(() => ({
    numberOfPixels,
    numberOfColors,
    currentColor,
    setNumberOfPixels,
    setNumberOfColors,
    setCurrentColor,
  }), [numberOfPixels, numberOfColors, currentColor]);

  return (
    <PixelContext.Provider value={ contextValue }>
      { children }
    </PixelContext.Provider>
  )
}

PixelProvider.propTypes = {
  value: PropTypes.shape,
}.isRequired;

export default PixelProvider;
