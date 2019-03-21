const CreateSquares = () => {
  let currentRed = 0
  let currentGreen = 0
  let currentBlue = 0
  let lightness = 0
  // working with about 2060 colors
  // R G B
  // all red
  // all red + green
  // all green
  // all green + blue
  // all blue
  // all blue + red
  // all blue + red + green

  const convertToHex = num => {
    if (num < 16){
      return "0" + (num).toString(16)
    }
    return (num).toString(16)
  }

  const createSquares = () => {
    let div = document.createElement('div')
    div.className = "one-pixel"
    div.style.backgroundColor = `#${convertToHex(currentRed)}${convertToHex(currentGreen)}${convertToHex(currentBlue)}`
    document.body.appendChild(div)
  }

  const alterColors = (column, numCols) => {
    if (column < (numCols * 1/7)){
      // only red
      if (currentRed < 256) currentRed += 4
    } else if (column < (numCols * 2/7)){
      // red and green
      if (currentGreen < 256) currentGreen += 4
    } else if (column < (numCols * 3/7)){
      // decrease red
      if (currentRed > 0) currentRed -= 4
    } else if (column < (numCols * 4/7)){
      // only green
      // increase blue
      if (currentBlue < 256) currentBlue += 4
    } else if (column < (numCols * 5/7)){
      // decrease green
      if (currentGreen > 0) currentGreen -= 4
    } else if (column < (numCols * 6/7)){
      // only blue
      // increase red
      if (currentRed < 256) currentRed += 4
    } else if (column < (numCols * 7/7)){
      // all three
      // increase green
      if (currentGreen < 256) currentGreen += 4
    }
  }

  const fillWebPage = () => {
    const screenHeight = document.body.offsetHeight
    const screenWidth = document.body.offsetWidth
    let numCols = screenWidth/10
    // move from top/left to screenWidth/screenHeight
    // populating pixels of colors
    for (let row = 0; row < (screenHeight/10); row += 1){
      currentRed = lightness
      currentGreen = lightness
      currentBlue = lightness
      // row increases 'lightness'
      for (let column = 0; column < numCols; column += 1){
        // column increases either red, green, or blue
        createSquares()
        alterColors(column, numCols)
      }
      lightness += 2
    }
  }

  return {
    createSquares,
    fillWebPage
  }
}



export default CreateSquares()
