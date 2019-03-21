
const clickToCopy = () => {
  let lastClick = 0
  const copyIt = (e) => {
    if (Date.now() - lastClick < 400) {
      // can copy the hex string
      let text = e.target.style.backgroundColor.match(/(\d+), (\d+), (\d+)/)
      console.log(text)
      let red = rgbToHex(text[1])
      let green = rgbToHex(text[2])
      let blue = rgbToHex(text[3])

      let copied = copyText(`#${red}${green}${blue}`)
    }
    lastClick = Date.now()
  }

  const copyText = async(text) => {
    let copied = await navigator.clipboard.writeText(text)
    return copied
  }

  const rgbToHex = (color) => {
    let hex = Number(color).toString(16)
    if (hex.length < 2) {
      hex = "0" + hex
    }
    return hex
  }

  document.addEventListener('click', copyIt)
}

export default clickToCopy
