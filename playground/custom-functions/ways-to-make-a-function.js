// ? Regular Function Declaration (IS HOISTED):
// function doctorize(firstName = 'Bob') {
//   return `Dr. ${firstName}`;
// }
// ! [ = 'Bob'] ABOVE IS SETTING A DEFAULT ON THE ARGUMENT

// ?Anonymous Function:
// function (firstName = 'Bob') {
//   return `Dr. ${firstName}`;
// }

// ?Function Expression (Storing a function as a variable )(IS NOT HOISTED!):
// const doctorize = function(firstName = 'Bob') {
//   return `Dr. ${firstName}`;
// };
// console.log(doctorize('Jay'));

// ? Arrow Functions
const inchToCM = inches => inches * 2.54;

console.log(inchToCM(3));

// ? TEST ARROW FUNCTION
const doctorize = firstName => `Dr. ${firstName}`;
const yell = firstName => firstName.toUpperCase();

console.log(yell(doctorize('Jay')));

// ? TEST AGAIN
const add = (a, b = 3) => a + b;

console.log(add(7, 11));

/* eslint-disable */
// ? Function creating an object
// function makeABaby(firstName, lastName) {
//   const baby = {
//     name: `${firstName} ${lastName}`,
//     age: 0,
//   };
//   return baby
// }

// ? Convert to arrow function?
const makeABaby = (firstName, lastName) => ({ name: `${firstName} ${lastName}`, age: 0 })

console.log(makeABaby('Bing', 'Bong'));

// ? IIFE Function
// Immediately Invoked Function Expresiion [Wrapped in () followed by (argument)]
(function(howCool) {
    const thisCool = console.log(`You are cool X${howCool}`)
    return thisCool
})(9000)

// ? Methods!! [Function that lives inside of an Object]
const jay = {
    name: 'Jay',
    // V This is the method within the jay object
    sayHi: function() {
        console.log('Hi!')
    },
    // V Shorthand to declare a method V
    yellHi() {
        console.log('HIIII FUCKER')
    },
    // Arrow function [Different scoping]
    whisperHi: () => {
        console.log('hiiiiii...')
    }
}

// ? Callback functions
//  Click Callback
const button = document.querySelector('.clickMe');
function handleClick() {
    console.log('Clicked em!')
}
button.addEventListener('click', handleClick)

// Timer Callback
setTimeout(function() {
    console.log('Timer done!')
}, 1000)