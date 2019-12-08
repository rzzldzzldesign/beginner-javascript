const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// ? CONSOLE.GROUP bunches data together so it can be easily managed.
people.forEach((person, index) => {
  // Debugger: Pops in a break point to test code.
  console.groupCollapsed(`${person.name}`);
  console.log(person.name);
  console.log(person.cool);
  console.log(person.country);
  console.groupEnd(`${person.name}`);
});

// console.table(people);

// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code
function doABunchOfTasks() {
  console.group('These things happened:');
  console.log('Function is running');
  console.error('DANGER! DANGER!');
  console.warn('High Voltage!');
  console.groupEnd('These things happened');
}

function doctorize(name) {
  console.count(`Run Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
