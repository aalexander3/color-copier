const CreateSquares = () => {
  let currentRed = 0
  let currentGreen = 0
  let currentBlue = 0
  let lightness = 0
  // working with about 2060 colors

  const convertToHex = num => {
    if (num < 16){
      return "0" + (num).toString(16)
    }
    return (num).toString(16)
  }

  const createSquares = (parent) => {
    let div = document.createElement('div')
    div.className = "one-pixel"
    div.style.backgroundColor = `#${convertToHex(currentRed)}${convertToHex(currentGreen)}${convertToHex(currentBlue)}`
    parent.appendChild(div)
  }

  const alterColors = (column, numCols) => {
    if (column < (numCols * 1/7)){
      // only red
      if (currentRed < 249) currentRed += 6
    } else if (column < (numCols * 2/7)){
      // red and green
      if (currentGreen < 249) currentGreen += 6
    } else if (column < (numCols * 3/7)){
      // decrease red
      if (currentRed > (8 + lightness)) currentRed -= 6
    } else if (column < (numCols * 4/7)){
      // only green
      // increase blue
      if (currentBlue < 249) currentBlue += 6
    } else if (column < (numCols * 5/7)){
      // decrease green
      if (currentGreen > (8 + lightness)) currentGreen -= 6
    } else if (column < (numCols * 6/7)){
      // only blue
      // increase red
      if (currentRed < 249) currentRed += 6
    } else if (column < (numCols * 7/7)){
      // all three
      // increase green
      if (currentGreen < 249) currentGreen += 6
    }
  }

  const fillWebPage = () => {
    const colorZone = document.querySelector('.color-zone')

    const screenHeight = colorZone.offsetHeight
    const screenWidth = colorZone.offsetWidth

    let numCols = Math.floor(screenWidth/10)
    let numRows = Math.floor(screenHeight/10)
    // move from top/left to screenWidth/screenHeight
    // populating pixels of colors
    for (let row = 0; row < numRows; row += 1){
      currentRed = lightness
      currentGreen = lightness
      currentBlue = lightness
      // row increases 'lightness'
      for (let column = 0; column < numCols; column += 1){
        // column increases either red, green, or blue
        createSquares(colorZone)
        alterColors(column, numCols)
      }
      lightness += 3
    }
  }

  return {
    createSquares,
    fillWebPage
  }
}



export default CreateSquares()
