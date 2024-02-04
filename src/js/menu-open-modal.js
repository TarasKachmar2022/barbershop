(() => {
  const refs = {
    menuOpenModalBtn: document.querySelector('[data-menu-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    menu: document.querySelector('[data-menu]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.menuOpenModalBtn.addEventListener('click', toggleMenuModal);

  function toggleMenuModal() {
    refs.menu.classList.toggle('is-hidden');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();
