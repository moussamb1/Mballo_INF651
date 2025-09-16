### Challenge 1: Even Number Finder (While Loop)
Objective: Write a program that prints all even numbers between 1 and 50.

Instructions:

Use a while loop to start from 1 and go up to 50.
In each loop iteration, check if the number is even.
If it is, print it to the console.
Stop the loop once you reach 50.


```js
let num = 1; // Use a while loop to start from 1 and go up to 50.

while (num <= 50) { // Stop the loop once you reach 50.
  if (num % 2 === 0) { // In each loop iteration, check if the number is even.
    console.log(num); // If it is, print it to the console.
  }
  num++;
}

```
### Challenge 2: PIN Validator (Do-While Loop)
Objective: Create a PIN validator that asks the user to enter a 4-digit PIN until they get it correct.

Instructions:

Hardcode the correct PIN (e.g., "1234").
Prompt the user to enter their PIN.
Use a do…while loop to keep asking until they enter the correct one.
When correct, display a success message and stop.


```js
const correctPIN = "1234"; // Hardcode the correct PIN (e.g., "1234").
let userPIN;

do { // Use a do…while loop to keep asking until they enter the correct one.
  userPIN = prompt("Enter your 4-digit PIN:"); // Prompt the user to enter their PIN.
} while (userPIN !== correctPIN);

console.log("Access Granted!"); // When correct, display a success message and stop.
```


### Challenge 3: Multiplication Table with Skips (For Loop + Continue)
Objective: Generate a multiplication table for a number entered by the user, but skip multiples of 5.

Instructions:

Ask the user to enter a number.
Use a for loop to generate its multiplication table from 1 to 10.
If the product is a multiple of 5, skip printing it (use continue).
Print the rest of the products in the format: 7 x 3 = 21.

```js
let num = prompt("Enter a number:"); // Ask the user to enter a number.

for (let i = 1; i <= 10; i++) { // Use a for loop to generate its multiplication table from 1 to 10.
  let product = num * i;
  if (product % 5 === 0) continue; // If the product is a multiple of 5, skip printing it (use continue).
  console.log(`${num} x ${i} = ${product}`); // Print the rest of the products in the format: 7 x 3 = 21.
}

```

### Challenge 4: Positive/Negative Number Checker (If-Else)
Objective: Write a program that checks if a number entered by the user is positive, negative, or zero.

Instructions:

Prompt the user to enter a number.
Use if-else statements to check:
Positive number → display “The number is positive.”
Negative number → display “The number is negative.”
Zero → display “The number is zero.”
Show the result with alert() or console.log().
```js
let num = prompt("Enter a number:"); // Prompt the user to enter a number.

if (num > 0) { // Positive number → display “The number is positive.”
  alert("The number is positive.");
} else if (num < 0) { // Negative number → display “The number is negative.”
  alert("The number is negative.");
} else { // Zero → display “The number is zero.”
  alert("The number is zero.");
}
```

### Challenge 5:
 Month Finder (Switch Statement) Objective: Write a program that takes a number (1–12) and outputs the corresponding month name. Instructions: Prompt the user to enter a number between 1 and 12. Use a switch statement to map: 1 → January, 2 → February, … 12 → December. If the number is outside the range, show “Invalid input.”

 ```js
let num = prompt("Enter a number (1-12):"); // Prompt the user to enter a number between 1 and 12.
num = Number(num);

switch (num) { // Use a switch statement to map: 1 → January, 2 → February, … 12 → December.
  case 1: console.log("January"); break;
  case 2: console.log("February"); break;
  case 3: console.log("March"); break;
  case 4: console.log("April"); break;
  case 5: console.log("May"); break;
  case 6: console.log("June"); break;
  case 7: console.log("July"); break;
  case 8: console.log("August"); break;
  case 9: console.log("September"); break;
  case 10: console.log("October"); break;
  case 11: console.log("November"); break;
  case 12: console.log("December"); break;
  default: console.log("Invalid input."); // If the number is outside the range, show “Invalid input.”
}

 ```