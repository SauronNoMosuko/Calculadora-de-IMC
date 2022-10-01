export const AlertError = {
  element: document.querySelector('.error'),
  open() {
    AlertError.element.classList.remove('hide')
  },
  close() {
    AlertError.element.classList.add('hide')
  }
}

