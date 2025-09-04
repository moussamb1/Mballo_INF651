# Challenge

## 1. Create Three Variables

Create three variables:
A variable for a person's name.
A variable for their age.
A variable for whether they are a student (boolean).
Instructions:
Declare the variables with appropriate data types.
Assign values to these variables.
Log each variable's value and its data type to the console.

```js
//Create three variables:
// 1. A variable for a person's name.
let myName="Moussa";

//A variable for their age.
let myAge=21;

//A variable for whether they are a student (boolean).
let isStudent=true;
//Log each variable's value and its data type to the console.
console.log("Name:", myName, "Type:", typeof myName);
console.log("Age:", myAge, "Type:", typeof myAge);
console.log("Is Student:", isStudent, "Type:", typeof isStudent);
```

## 2. Basic Arithmetic Operations

Declare two number variables and perform addition, subtraction, multiplication, and division with them.
Instructions:
Declare two variables with numerical values.
Addition, subtraction, multiplication, and division are performed using these variables.
Log the result of each operation to the console.

```js
// Declare two number variables
let num1 = 10;
let num2 = 5;

// Perform addition, subtraction, multiplication, and division
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Log the result of each operation to the console
console.log("Addition:", sum);
console.log("Subtraction:", difference);
console.log("Multiplication:", product);
console.log("Division:", quotient);
```

## 3. Working with Strings

Declare a string variable containing a sentence.
Instructions:
Declare a string variable and assign it a sentence.
Log the length of the string, the first character, and the last character to the console using string methods.

```js
// Declare a string variable and assign it a sentence
let sentence = "JavaScript is fun to learn!";

// Log the length of the string
console.log("Length:", sentence.length);

// Log the first character of the string
console.log("First character:", sentence[0]);

// Log the last character of the string
console.log("Last character:", sentence[sentence.length - 1]);
```

## 4. Math Object

Declare a variable with a negative number and use the Math object to perform various calculations.
Instructions:
Declare a variable with a negative numerical value.
Use the Math object to calculate and log the square root, the number squared, and the absolute value of the variable.

```js
// Declare a variable with a negative numerical value
let negativeNum = -121;

// Use the Math object to calculate and log the square root
console.log("Square root:", Math.sqrt(Math.abs(negativeNum)));

// Calculate and log the number squared
console.log("Squared:", Math.pow(negativeNum, 2));

// Calculate and log the absolute value
console.log("Absolute value:", Math.abs(negativeNum));
```

## 5. Boolean Logic and Comparison Operators

Declare two number variables and compare them using comparison operators.
Instructions:
Declare two number variables with numerical values.
Use comparison operators to determine and log whether the first number is greater than, less than, or equal to the second number.

```js
// Declare two number variables with numerical values
let numberA = 81;
let numberB = 12;

// Use comparison operators and log the results
console.log("Is numberA > numberB?", numberA > numberB);
console.log("Is numberA < numberB?", numberA < numberB);
console.log("Is numberA == numberB?", numberA == numberB);
```

## 6. Logical Operators

Declare two boolean variables and evaluate logical operations.
Instructions:
Declare two boolean variables and assign them boolean values (true or false).
Log the results of logical AND (&&), OR (||), and NOT (!) operations using these variables.

```js
// Declare two boolean variables
let boolA = true;
let boolB = false;

// Log the results of logical AND (&&)
console.log("AND (boolA && boolB):", boolA && boolB);

// Log the results of logical OR (||)
console.log("OR (boolA || boolB):", boolA || boolB);

// Log the results of logical NOT (!)
console.log("NOT (!boolA):", !boolA);
console.log("NOT (!boolB):", !boolB);
```

## 7. Using Template Literals

Create a greeting message using template literals.
Instructions:
Declare two variables for a person's first and last name.
Use template literals to create a greeting message that includes both names.
Log the greeting message to the console.

```js
// Declare two variables for a person's first and last name
let firstName = "Moussa";
let lastName = "Mballo";

// Use template literals to create a greeting message
let greeting = `Hello, ${firstName} ${lastName}! Welcome to the course.`;

// Log the greeting message to the console
console.log(greeting);
```