import CreateSquares from './CreateSquares'
import clickToCopy from './clickToCopy'

import './styles.css'

const init = () => {
  CreateSquares.fillWebPage()
  clickToCopy()
}

document.addEventListener('DOMContentLoaded', init)
