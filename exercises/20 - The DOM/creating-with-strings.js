console.log('Connected');

const item = document.querySelector('.item');

const title = `DOGGO PWR!`;
const imgSize = `500`;
const src = `https://picsum.photos/${imgSize}`;
const subhead = `Pretty little doggos all around`;
const myHTML = `
    <div class="wrapper">
        <h1>${title}</h1>
        <label>${subhead}</label>
        <br>
        <img src="${src}" alt="${subhead}">
    </div>
`;
// ?^ This works to add things to the DOM however it is a string so
// ?  cannot be modified or selected before it is rendered in the DOM.

// ! Turn a string into DOM elements:
// ? V This converts the string into a 'DOM fragment' which contains DOM elements
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(typeof myFragment);

// document.body.appendChild(myFragment);
document.body.append(myFragment);
