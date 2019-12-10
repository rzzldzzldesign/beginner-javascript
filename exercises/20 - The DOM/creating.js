console.log('Connected');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'MAGICKAL TEXT APPEARS!';
myParagraph.classList.add('ABRACADABRA');
console.log(myParagraph);

const myImg = document.createElement('img');
myImg.src = `https://picsum.photos/400`;
myImg.alt = `BANGING PHOTO BUD!`;

console.log(myImg);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myImg);
myDiv.appendChild(myParagraph);
document.body.appendChild(myDiv);

// !ADD HEADING ABOVE
const newHeading = document.createElement('h2');
newHeading.textContent = 'APPEARING HEADING';
// myDiv.appendChild(newHeading); // [ONLY ADDED AT THE END WITH APPEND CHILD]
// ?V NEW WAY ADDING WHEREVER YOU WANT LIKE!
myDiv.insertAdjacentElement('afterbegin', newHeading);

// ?ADDING IN LI ITEMS
// const myUnorderedList = document.createElement('ul');
// console.log(myUnorderedList);

// const myListElement = document.createElement('li');
// myListElement.textContent = 'LIST ITEM';

// myDiv.appendChild(myUnorderedList);
// myDiv.appendChild(myListElement);
// document.body.appendChild(myDiv);
