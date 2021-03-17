import React from "react";
import { ColourContainer } from "./styled-components";
import { getRandHex, checkContrast } from "../../utils/utils";

export default function RandomColour() {
  const hex = getRandHex();
  const whiteContast = checkContrast(hex, "ffffff");
  const contrastColor = whiteContast < 1 / 4.5 ? "white" : "black";
  return (
    <ColourContainer color={hex} contrast={contrastColor}>
      {hex}
    </ColourContainer>
  );
}
