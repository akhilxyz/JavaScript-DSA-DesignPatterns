// The module pattern in JavaScript is a design pattern used to encapsulate code into modules, providing a way to 
// create private and public methods and variables. This pattern helps in organizing code, avoiding global scope pollution, 
// and enhancing maintainability.

// file 1

/**
 * Adds two numbers.
 * @param {number} x The first number to add.
 * @param {number} y The second number to add.
 * @returns {number} The sum of x and y.
 */
export default function add(x, y) {
    return x + y;
}

/**
 * Multiplies a number by 2.
 * @param {number} x The number to multiply.
 * @returns {number} The result of x multiplied by 2.
 */
export function multiply(x) {
    return x * 2;
}

/**
 * Subtracts two numbers.
 * @param {number} x The first number to subtract.
 * @param {number} y The second number to subtract.
 * @returns {number} The result of x minus y.
 */
export function subtract(x, y) {
    return x - y;
}

/**
 * Squares a number.
 * @param {number} x The number to square.
 * @returns {number} The result of x squared.
 */
export function square(x) {
    return x * x;
}


// Advantages:
// Encapsulation: It helps in bundling related functions and variables together, keeping them isolated from the global scope.
// Code Organization: It improves code structure and organization, making it easier to manage.
// Private State: Allows the creation of private variables that cannot be accessed from outside the module, enhancing security.
// Reusability: Modules can be reused across different parts of an application without conflicts.

// Disadvantages:
// Overhead: Can introduce overhead due to the creation of closures and extra functions.
// Complexity: It may add complexity to the code, especially for simple functionalities.
// Limited Scope: The module pattern may not work well in situations requiring inheritance or dynamic behavior.

// When to Use:
//  Use the module pattern when you want to group related functions and variables and encapsulate state. 
//  It's especially useful in larger applications where maintaining a clean global namespace is important.
//  If you're building a library or a complex application with multiple components, the module pattern is a good choice.