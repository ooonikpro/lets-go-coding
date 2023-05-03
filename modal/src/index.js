const button = document.querySelector('[data-modal]');

const onKeydown = (e) => {
  if (e.keyCode === 27) {
    closeModal();
  }
}

const onScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
}

button.onclick = () => {
  const id = button.dataset.modal;

  const modal = document.getElementById(id);

  modal.classList.add('modal--show');

  document.documentElement.classList.add('no-scroll');

  document.addEventListener('keydown', onKeydown);
}

const modal = document.getElementById('#dialog-1');
const modalClose = modal.querySelector('.modal__close');
const modalOverlay = modal.querySelector('.modal__overlay');

const closeModal = () => {
  modal.classList.remove('modal--show');
  document.documentElement.classList.remove('no-scroll');
  document.removeEventListener('keydown', onKeydown);
}

modalClose.onclick = closeModal;
modalOverlay.onclick = closeModal;