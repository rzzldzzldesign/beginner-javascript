// FUNCTION DEFINITION
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Calculating Bill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  // RETURN VALUE THAT THE FUNCTION RETURNS
  return Math.round(total);
}

// FUNCTION CALL
const myTotal = calculateBill(200);
const myTotal2 = calculateBill(100, 0.135);

console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${myTotal2}`);

// Calling function within the  string itself so no cathicing variable is needed.
// console.log(`Your total is $${calculateBill()}`);
