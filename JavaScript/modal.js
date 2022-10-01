export const modal = {

  wrapper: document.querySelector ('.modalWrapper'),
  message: document.querySelector ('.modalCard .title span'),
  BtnClose: document.querySelector ('.modalCard button.close'),

  open: function() {
    modal.wrapper.classList.add('open')
  },
  close: function() {
    modal.wrapper.classList.remove('open')
  }
}

modal.BtnClose.onclick = () => {
  // modalWrapper.classList.remove('open')
  modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    modal.close()
  }
}