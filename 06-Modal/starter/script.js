'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// querySelectAll() select all the elements that have tag '.show-modal'
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open the Modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Close the Modal with X button
btnCloseModal.addEventListener('click', closeModal);
// Close the Modal with clicking area outside the modal
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e);

  // Close when ESC is pressed
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Esc was pressed');
    closeModal();
  }
});
