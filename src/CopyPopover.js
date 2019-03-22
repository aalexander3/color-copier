const CopyPopover = () => {
  const popoverTemplate = `
    <h4>Copied!</h4>
  `

  const makePopover = (x,y) => {
    let popover = document.createElement('div')
    popover.className = "popover"
    popover.innerHTML = popoverTemplate
    document.body.appendChild(popover)
    popover.style.top = `${y}px`
    popover.style.left = `${x}px`
    setTimeout(()=>removePopover(popover), 2000)
  }

  const removePopover = (popover) => {
    popover.remove()
  }

  return {
    makePopover
  }
}

export default CopyPopover()
