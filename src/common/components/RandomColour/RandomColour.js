import React, { useState } from "react";
import { ColourContainer } from "./styled-components";
import { checkContrast, getRandHex } from "../../utils/utils";
import Swatch from "../Swatch/Swatch";

export default function RandomColour() {
  const hex = getRandHex();
  const colorArray = [hex, getRandHex(), getRandHex()];

  function handleClick(color) {
    console.log(color === hex);
  }

  return (
    <ColourContainer color={hex}>
      <p>{hex}</p>
      <div>
        {colorArray.map((color) => (
          <Swatch
            color={color}
            key={color}
            onClick={() => handleClick(color)}
          />
        ))}
      </div>
    </ColourContainer>
  );
}

// const whiteContast = checkContrast(hex, "ffffff");
// const contrastColor = whiteContast < 1 / 4.5 ? "white" : "black";
