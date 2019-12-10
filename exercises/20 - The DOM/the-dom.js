// const p = document.querySelector('p');

// console.log(p);

// const heading = document.querySelector('h2');

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('beforeend', '🍕');
// console.log(pizzaList.textContent);

// ?CLASSES
const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log(pic.classList);

function toggle() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggle);

const custom = document.querySelector('.custom');

console.log(custom.dataset);
