const age = 34;

const person = {
  name: 'Jay',
  age,
  'cool-dude': true,
  'super bad': true,
  car: {
    wheels: 4,
    color: 'green',
  },
  sayHello(greeting = 'HEY!') {
    return `${greeting} ${this.name}`;
  },
};
person.job = 'Web dev';

console.table(person);

const nameInput = document.querySelector('[name="first"]');

const name = nameInput ? nameInput.value : 'NOPE';
console.log(name);

delete person.car;
console.table(person);
