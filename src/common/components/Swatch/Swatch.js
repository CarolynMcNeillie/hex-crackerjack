import React, { useState } from "react";
import { SwatchButton } from "./styled-components";

export default function Swatch({ color, onClick }) {
  return <SwatchButton color={color} onClick={onClick}></SwatchButton>;
}
