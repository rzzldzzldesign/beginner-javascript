// GLOBALLY SCOPED
// let cool;
// if (1 === 1) {
//    cool = true;
// }

// console.log(cool);

// ? VAR is function scoped LET and CONST are block scoped.

function isCool(name) {
  let cool;
  if (name === 'Jay') {
    cool = true;
  } else {
    cool = false;
  }
  console.log(cool);
  return cool;
}

const dog = 'Peaches';

function logDog() {
  console.log(dog);
}
function go() {
  const dog = 'Dixie';
  logDog();
}

go();

// ! TRY NOT TO CREATE GLOBAL VARIABLES
