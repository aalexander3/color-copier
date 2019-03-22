const SelectedColor = () => {
  let selectedColor;
  let brightness;

  const selector = (color, lightness) => {
    console.log(lightness);
    brightness = lightness
    selectedColor = color;
    let selectColor = document.querySelector(".selected-color")
    let colorName = document.querySelector(".color-name")
    colorName.innerText = color
    selectColor.style.backgroundColor = color
  }

  const selectorTemplate = () => {
    return `
      <h3 class="color-name">No color selected!</h3>
      <div class="selected-color"></div>
      <div class="saturation-dial">saturation</div>
      <div class="brightness-dial">brightness</div>
    `
  }

  return {
    selector,
    selectorTemplate
  }
}

export default SelectedColor()
