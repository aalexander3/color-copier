import SelectedColor from './SelectedColor'
import CopyPopover from './CopyPopover'
import { rgbToHex } from './ColorConverter'

const clickToCopy = async() => {
  let copied;
  let lastClick = 0

  const copyIt = (e) => {
    if (Date.now() - lastClick < 400) {
      let target = e.target
      let text = e.target.style.backgroundColor.match(/(\d+), (\d+), (\d+)/)
      if (text.length > 3) {
        let red = rgbToHex(text[1])
        let green = rgbToHex(text[2])
        let blue = rgbToHex(text[3])
        let selectColor = `#${red}${green}${blue}`
        let brightness = e.target.dataset.lightness

        copied = copyText(selectColor)
        SelectedColor.selector(selectColor, brightness)
        CopyPopover.makePopover(e.clientX - 33, e.clientY - 50)
      }
    }
    lastClick = Date.now()
  }

  const copyText = async(text) => {
    let copier = await navigator.clipboard.writeText(text)
    return copier
  }
  
  document.addEventListener('click', copyIt)
}

export default clickToCopy
