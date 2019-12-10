// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.append(myDiv);
// console.log(myDiv);

// make an unordered list
const myList = document.createElement('ul');
myList.style['list-style'] = 'none';
myList.style.margin = 0;
myList.style.padding = '2rem';

// add three list items with the words "one, two, three" in them
const myLi1 = document.createElement('li');
myLi1.textContent = 'ONE';
const myLi2 = document.createElement('li');
myLi2.textContent = 'TWO';
const myLi3 = document.createElement('li');
myLi3.textContent = 'THREE';

myList.appendChild(myLi1);
myList.appendChild(myLi2);
myList.appendChild(myLi3);
// put that list into the above wrapper
myDiv.appendChild(myList);
// console.log(myList);

// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src =
  'https://media.tenor.com/images/ff8f2ffc5767147b7aeb19f5b0526866/tenor.gif';
// set the width to 250
myImg.width = 250;
myImg.height = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// console.log(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="box" style="background: aquamarine;">
        <p>BING</p>
        <p>BONG</p>
    </div>
`;
// put this div before the unordered list from above
// !V ADDING AS STRING MEANS IT CANNOT BE MODIFIED
// myDiv.insertAdjacentHTML('afterbegin', myHTML);

// *CONVERT TO A FRAGMENT FIRST!
// const myFragment = document.createRange().createContextualFragment(myHTML);
// *THEN INJECT INTO THE DOM AS ELEMENTS:
// myDiv.insertAdjacentElement('afterbegin', myFragment);
// !^ NOT WORKING AS myFragment is not an ELEMENT for some reason??

const myElement = document.querySelector('ul');
myElement.insertAdjacentHTML('beforebegin', myHTML);

// console.log(myElement);
// add a class to the second paragraph called warning
const myBox = document.querySelector('.box');
myBox.children[1].classList.add('warning');

// remove the first paragraph
myBox.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="player-card">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old.<br>
    In Dog years this person would be ${age * 7}.<br>
    That would be an old dog!</p>
    <button class="delete" type="button">&times; </button>
    </div>
    `;
  return html;
}
// console.log(html);
// !TRIED console.log(html) here but it returned error: 'html not defined.'
// *RETURN needs to be CAUGHT in a variable before logging to console. V SEE LINE 103

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
console.log(cardsDiv);

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Jay', 34, '191CM');
cardsHTML += generatePlayerCard('Emma', 29, '166CM');
cardsHTML += generatePlayerCard('Peaches', 2.5, '90CM');
cardsHTML += generatePlayerCard('The Chad', 3, '120CM');
console.log(cardsHTML);

// append those cards to the div
cardsDiv.insertAdjacentHTML('afterbegin', cardsHTML);

// put the cards div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('button');

// FUNCTION DELETING CARD
function deleteCard(event) {
  //   console.log('DELETE CARD ADD!');
  //   this.parentElement.remove();
  const clickedButton = event.currentTarget;
  //   clickedButton.parentElement.remove();
  clickedButton.closest('.player-card').remove();
}
buttons.forEach(button => button.addEventListener('click', deleteCard));

console.log(buttons);

// select all the buttons!
// make out delete function
// loop over them and attach a listener
