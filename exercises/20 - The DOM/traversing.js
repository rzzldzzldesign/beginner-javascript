const jay = document.querySelector('.jay');

// console.log(jay.children);
// console.log(jay.firstElementChild);
// console.log(jay.lastElementChild);
// console.log(jay.previousElementSibling);
// console.log(jay.nextElementSibling);
// console.log(jay.parentElement);

// console.log(jay.childNodes);
// console.log(jay.firstChild);
// console.log(jay.lastChild);
// console.log(jay.previousSibling);
// console.log(jay.nextSibling);
// console.log(jay.parentNode);

// ? Creating an element then removing it straight away, it is still stored in JS memory.
const p = document.createElement('p');
p.textContent = 'REMOVED INSTANTLY?';
document.body.appendChild(p);
// V Removing immeditely.
p.remove();
// V Still available? Yup in Memory.
console.log(p);
