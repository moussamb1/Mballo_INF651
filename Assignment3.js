// Ask user for a number
let num = prompt("Enter a number:");

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  let product = num * i;

  // Skip multiples of 5
  if (product % 5 === 0) continue;

  // Print product
  console.log(`${num} x ${i} = ${product}`);
}
