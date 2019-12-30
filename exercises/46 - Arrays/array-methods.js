console.log('HOOKED UP');

const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
  Static Methods
*/

// Array.of();

// Make a function that creates a range from x to y with Array.from();

function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
  return range;
}
const myRange = createRange(23, 69);
// console.log(myRange);

// Check if the last array you created is really an array with Array.isArray();
// console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
// console.log(Object.entries(meats));
// console.log(Object.keys(meats));
// console.log(Object.values(meats));

// Object.entries(meats).forEach(([key, value]) => {
//   //   const key = entry[0];
//   //   const value = entry[1];
//   //   ?DESTRUCTURED VERSION
//   //   const [key, value] = entry;
//   console.log(key, value);
// });

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = 'hot dogs,hamburgers,sausages,corn';
// console.log(foodString.split(', '));

// // take the last item off toppings with pop()
// console.log(toppings);
// const lastItem = toppings.pop();
// console.log(lastItem);
// console.log(toppings);
// // add it back with push()
// toppings.push(lastItem);
// console.log(toppings);

// // take the first item off toppings with shift()
// const firstItem = toppings.shift();
// console.log(firstItem);
// console.log(toppings);
// // add it back in with unshift()
// toppings.unshift(firstItem);
// console.log(toppings);

/*
// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1);
console.log(toppings);
console.log(newToppings);
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

// Make a copy of the toppings array with slice()
const toppingsCopy = toppings.slice(0);
console.log(toppingsCopy);

// Make a copy of the toppings array with a spread
const toppingsSpread = [...toppings];
console.log(toppingsSpread);

// take out items 3 to 5 of your new toppings array with splice()
toppingsSpread.splice(3, 5);
console.log(toppingsSpread);

// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = toppings.indexOf('Avocado');
console.log(avoIndex);

// Check if hot sauce is in the toppings with includes()
const isInToppings = toppings.includes('Hot Sauce');
// add it if it's not
if (!isInToppings) {
  toppings.push('Hot Sauce');
}
console.log(toppings);

// flip those toppings around with reverse()
toppings.reverse();
console.log(toppings);

const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed);
*/

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
// function findBurgerRating(singleFeedback) {
//   return singleFeedback.includes('burg');
// }

function findByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
}
const burgFinder = feedback.find(findByWord('burg'));
const smoothieFinder = feedback.find(findByWord('Smoothie'));
console.log(burgFinder);
console.log(smoothieFinder);
// const burgFeedback = feedback.find(findBurgerRating);

// find all ratings that are above 2 with filter()
function filterByMinRating(minRating) {
  return function(singleFeedback) {
    return singleFeedback.rating > minRating;
  };
}

const goodReviews = feedback.filter(filterByMinRating(3));
console.table(goodReviews);

// find all ratings that talk about a burger with filter()
const burgRatings = feedback.filter(findByWord('burg'));
console.table(burgRatings);

// Remove the one star rating however you like!
const noOneStars = feedback.filter(
  singleFeedback => singleFeedback.rating !== 1
);

console.table(noOneStars);

// check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(
  meatValue => meatValue >= 5
);
console.log(isThereEnoughOfAtLeastOneMeat);

// make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(
  meatValue => meatValue >= 3
);
console.log(isThereEnoughOfEveryMeat);

// sort the toppings alphabetically with sort()
const toppingsSorted = toppings.sort();
console.log(toppingsSorted);

// sort the order totals from most expensive to least with .sort()
function orderSort(a, b) {
  return a - b;
}
const orderTotalsSorted = orderTotals.sort(orderSort);
console.log(orderTotalsSorted);

// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort((a, b) => {
  const aPrice = a[1];
  const bPrice = b[1];
  return aPrice - bPrice;
});
console.table(productsSortedByPrice);

/*
  Looping Methods (next)
*/
