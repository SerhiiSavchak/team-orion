(() => {
  const refs = {
    openHotelModalBtn: document.querySelector('[data-hotel-modal-open]'),
    openSecondHotelModalBtn: document.querySelector(
      '[data-hotel-modal-open-second]'
    ),
    closeHotelModalBtn: document.querySelector('[data-hotel-modal-close]'),
    modalHotel: document.querySelector('[data-hotel-modal]'),
  };
  refs.openHotelModalBtn.addEventListener('click', toggleModal);
  refs.openSecondHotelModalBtn.addEventListener('click', toggleModal);
  refs.closeHotelModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalHotel.classList.toggle('is-hidden');
  }
})();
