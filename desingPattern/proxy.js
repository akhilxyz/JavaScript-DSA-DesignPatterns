

// The Proxy Pattern in JavaScript is a design pattern that allows you to create a proxy object that can intercept 
// and control access to another object, known as the target object. This can be useful for various purposes, such as logging, 
// validation, or modifying the behavior of property access and method calls.

/**
 * Creates a new Proxy instance for the given object,
 * intercepting and logging accesses and modifications to its properties.
 *
 * @param {Object} target - The object to create a proxy for.
 * @param {Object} handler - An object that defines the behavior of the proxy instance.
 */
const person = {
    name: "John Doe",
    age: 42,
    nationality: "American",
  };

const personProxy = new Proxy(person, {
    /**
     * Intercepts and logs accesses to the properties of the target object.
     *
     * @param {Object} obj - The target object.
     * @param {String} prop - The property being accessed.
     * @returns {*} The value of the property.
     */
    get: function (obj, prop) {
        console.log(`The value of ${prop} is ${obj[prop]}`);
        return obj[prop];
    },

    /**
     * Intercepts and logs modifications to the properties of the target object.
     *
     * @param {Object} obj - The target object.
     * @param {String} prop - The property being modified.
     * @param {*} value - The new value for the property.
     * @returns {*} The new value for the property.
     */
    set: function (obj, prop, value) {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    },
});

personProxy.age;
personProxy.name;
personProxy.nationality;


// Advantages::
// Decoupling: Separates concerns, leading to cleaner code.
// Flexibility: Allows dynamic behavior changes without modifying the original object.
// Control Over Access: Enforces rules (e.g., validation) and adds security.
// Lazy Evaluation: Delays expensive operations until necessary.
// Transparent Modification: Extends functionality without altering interfaces.

// Disadvantages::
// Performance Overhead: Additional layer can slow down property access.
// Complexity: Adds complexity, making the code harder to maintain.
// Debugging Difficulty: Can complicate stack traces and error handling.
// Limited Browser Support: Not supported in older browsers (e.g., IE).
// Potential for Overuse: Can lead to unnecessary complexity if misused.
// Use proxies judiciously to balance their benefits and drawbacks!