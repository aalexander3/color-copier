import CreateSquares from './CreateSquares'
import clickToCopy from './clickToCopy'
import SelectedColor from './SelectedColor'

import './styles.css'

const appendDivs = () => {
  const colorZone = document.createElement('div')
  colorZone.className = 'color-zone'
  const selectDiv = document.createElement('div')
  selectDiv.className = 'selector'
  selectDiv.innerHTML += SelectedColor.selectorTemplate()
  document.body.append(colorZone, selectDiv)
}

const init = async() => {
  appendDivs()
  CreateSquares.fillWebPage()
  let copiedColor = await clickToCopy()
  if (copiedColor) console.log(copiedColor)
}

document.addEventListener('DOMContentLoaded', init)
