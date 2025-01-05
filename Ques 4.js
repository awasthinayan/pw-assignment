// 1. Operator Precedence
// Operator precedence determines the order in which operations are performed in an expression with multiple operators. Operators with higher precedence are executed before operators with lower precedence.
console.log("Example 1:")

let result1 = 10 + 5 * 2; 

console.log(result1)
// Multiplication (*) has higher precedence than addition (+)
// Result: 10 + (5 * 2) = 20


// Associativity of Operators
// Associativity determines the order in which operators of the same precedence are evaluated. Operators can have:

// Left-to-right associativity: Most operators like +, -, *, /, <, and &&.

console.log("Example 2:")

let result2 = 10 - 5 - 2; 
console.log(result2)       // Left-to-right: (10 - 5) - 2 = 3

// Right-to-left associativity: Assignment (=) and exponentiation (**) operators

console.log("Example 3:")
let result3=2**3**2
console.log(result3)   //// Right-to-left: 2 ** (3 ** 2) = 2 ** 9 = 512



