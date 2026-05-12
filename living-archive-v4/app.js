import './systems/archiveSystem.js'
import { switchView } from './systems/uiSystem.js'

const navButtons = document.querySelectorAll('.nav-btn')

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => {
      btn.classList.remove('active')
    })

    button.classList.add('active')
    switchView(`${button.dataset.view}View`)
  })
})
