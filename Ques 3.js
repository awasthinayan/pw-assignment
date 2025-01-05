// 1-Unary Operators
// A unary operator works with a single operand. These operators either perform operations like negation, increment, or type checking, or modify the operand directly.


// Unary Negation (-): Negates the value
let x = 5;
let negX = -x; // negX = -5

// Increment (++) and Decrement (--): Modifies the value by 1
let a = 10;
a++; // Post-increment: a = 11
--a; // Pre-decrement: a = 10

// Logical NOT (!): Inverts the boolean value
let isTrue = true;
let isFalse = !isTrue; // isFalse = false

// Typeof: Returns the data type of the operand
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 42);      // Output: "number"

// Void: Evaluates an expression but returns undefined
let result = void (5 + 5); // result = undefined

//2-Binary Operator

// Arithmetic Operators
let sum = 10 + 5;       // Addition: sum = 15
let difference = 10 - 5; // Subtraction: difference = 5
let product = 10 * 5;    // Multiplication: product = 50
let quotient = 10 / 5;   // Division: quotient = 2
let remainder = 10 % 3;  // Modulus: remainder = 1

// Comparison Operators
console.log(10 > 5);   // Output: true
console.log(10 < 5);   // Output: false
console.log(10 == "10"); // Output: true (loose equality, type is ignored)
console.log(10 === "10"); // Output: false (strict equality, type is considered)

// Logical Operators
console.log(true && false); // Output: false (AND)
console.log(true || false); // Output: true (OR)

// Bitwise Operators
let bitwiseAnd = 5 & 3; // bitwise AND: 5 (101) & 3 (011) = 1 (001)
let bitwiseOr = 5 | 3;  // bitwise OR:  5 (101) | 3 (011) = 7 (111)

// Assignment Operators
let y = 5;
y += 3; // Equivalent to x = x + 3; x = 8
y *= 2; // Equivalent to x = x * 2; x = 16

// String Concatenation (Binary +)
let str = "Hello" + " World"; // str = "Hello World"


//3-Ternary Operator 

// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

// Nested Ternary Example
let score = 85;
let grade = (score >= 90) ? "A" 
            : (score >= 80) ? "B" 
            : (score >= 70) ? "C" 
            : "F";
console.log(grade); // Output: "B"
