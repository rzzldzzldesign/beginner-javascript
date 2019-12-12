const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

// ?REGULAR FUNCTION DEFINITION v
// function handleClick() {
//   console.log('GOT CLICKED!');
// }
// butts.addEventListener('click', handleClick);
// coolButts.addEventListener('click', handleClick);

// ?ARROW FUNCTION v
const handleClickArrowFunc = () => console.log('GOT CLICKED!');
butts.addEventListener('click', handleClickArrowFunc);
coolButts.addEventListener('click', handleClickArrowFunc);
// console.log(buyButts);

// function buyItem() {
//   console.log('YOU BOUGHT IT!');
// }
// ? v 'buyButton' here can be named anything, it is the element being looped over.
// function addBuyButtonListener(buyButton) {
//   buyButton.addEventListener('click', buyItem);
// }
// buyButts.forEach(addBuyButtonListener);

// ? v Double arrow function way of setting it up. Cannot be UNBOUND.
// const buyButts = document.querySelectorAll('.buy');
// buyButts.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('BUYED IT (ARROW)');
//     });
// });

const buyButts = document.querySelectorAll('.buy');

function handleBuyButtonClick(event) {
  //   const whatItem = event.target.textContent;
  //   console.log(whatItem);
  //   console.log(`THAT COST: ${parseInt(event.target.dataset.price)}`);
  //   console.log(event.target);
  console.log('BUTTON CLICKER');

  console.log(event.currentTarget);
  // ? This click event is "bubbling up" all the way to the window.
  // ? To stop it:
  event.stopPropagation();
}
buyButts.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// window.addEventListener(
//   'click',
//   event => {
//     console.log('WINDOW CLICKER');
//     console.log(event.target);
//   },
//   { capture: false }
// );

const image = document.querySelector('.image');
image.addEventListener('mouseenter', function(event) {
  console.log(event.currentTarget);
  console.log(this);
});
