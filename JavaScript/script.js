import { modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'
// Variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector ('.modalWrapper')
// const modalMessage = document.querySelector ('.modalCard .title span')
// const modalBtnClose = document.querySelector ('.modalCard button.close')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value 

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    AlertError.open()
    return;
  }

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  modal.message.innerText = message
  // modalWrapper.classList.add('open')
  modal.open()
}


