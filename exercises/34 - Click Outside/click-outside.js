const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons);

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  console.log(button, card, imgSrc, desc);
  modalInner.innerHTML = `
    <h2>${name}</h2>
    <img width="500" height="500" src="${imgSrc.replace(
      '200',
      '500'
    )}" alt="${desc}">
    <small>${desc}</small>
  `;
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
