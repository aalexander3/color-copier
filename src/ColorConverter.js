const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = "0" + hex
  }
  return hex
}

const hexToRGB = (hex) => {

}

const convertToHex = num => {
  if (num < 16){
    return "0" + (num).toString(16)
  }
  return (num).toString(16)
}



export { rgbToHex, hexToRGB, convertToHex }
