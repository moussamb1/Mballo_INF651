// 1. Variables and Data Types
let name = "Amir Moussa";
let age = 21;
let isStudent = true;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);

// 2. Basic Arithmetic Operations
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 3. Working with Strings
let sentence = "Learning JavaScript is fun!";
console.log("Sentence Length:", sentence.length);
console.log("First Character:", sentence[0]);
console.log("Last Character:", sentence[sentence.length - 1]);

// 4. Math Object
let negativeNum = -9;

console.log("Square Root:", Math.sqrt(Math.abs(negativeNum)));
console.log("Squared:", Math.pow(negativeNum, 2));
console.log("Absolute Value:", Math.abs(negativeNum));

// 5. Boolean Logic and Comparison Operators
let x = 7;
let y = 12;

console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x === y:", x === y);

// 6. Logical Operators
let a = true;
let b = false;

console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a); 
console.log("!b:", !b);

// 7. Using Template Literals
let firstName = "Amir";
let lastName = "Moussa";

let greeting = `Hello, ${firstName} ${lastName}! Welcome to My World!.`;
console.log(greeting);
