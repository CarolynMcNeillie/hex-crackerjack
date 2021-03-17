// Thanks to Alvaro Montoro for the contrast checking utilities
// https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o

const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const luminance = (r, g, b) => {
  const a = [r, g, b].map(function (value) {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const checkContrast = (hex1, hex2) => {
  // convert hex codes to RGB
  const color1rgb = hexToRgb(hex1);
  const color2rgb = hexToRgb(hex2);

  // calculate the relative luminance
  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

  // find contrast ratio
  const ratio =
    color1luminance > color2luminance
      ? (color2luminance + 0.05) / (color1luminance + 0.05)
      : (color1luminance + 0.05) / (color2luminance + 0.05);

  return ratio;
};

// Constant to hold the total number of browser colours
// aka FFFFFF
export const WEBCOLOURS = 16777215;

export const zeroPad = (string, length) => {
  let paddedString = string;
  if (paddedString.length < length) {
    paddedString = `0${paddedString}`;
    zeroPad(paddedString, length);
  }
  return paddedString;
};

export const changeBase = (number, fromBase, toBase) => {
  if (fromBase === 10) return parseInt(number).toString(toBase);
  else if (toBase === 10) return parseInt(number, fromBase);
  else {
    var numberInDecimal = parseInt(number, fromBase);
    return parseInt(numberInDecimal).toString(toBase);
  }
};

export const getRandHex = () => {
  const randColour = Math.floor(Math.random() * WEBCOLOURS);
  const randHex = zeroPad(changeBase(randColour, 10, 16), 6);
  return `#${randHex}`;
};
