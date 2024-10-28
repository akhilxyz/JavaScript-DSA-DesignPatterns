// The Singleton design pattern is a structural pattern that restricts a class to a single instance and provides 
// a global point of access to that instance. In JavaScript, singletons are useful when you want to control access
//  to some shared resource or maintain global application state across modules.

// When to Use the Singleton Pattern
// Managing shared resources (like a logging service, database connections, or configuration settings).
// Coordinating global state in an application, such as managing a cache or a settings object.
// The Singleton pattern is powerful but should be used carefully, as it introduces global state and can 
// make testing and debugging more difficult if overused.


let counter = 0;

/**
 * Singleton class for managing a shared counter.
 */
class Counter {
  /**
   * Returns the singleton instance of the Counter class.
   * @returns {Counter} The singleton instance of the Counter class.
   */
  getInstance() {
    return this;
  }

  /**
   * Returns the current count value.
   * @returns {number} The current count value.
   */
  getCount() {
    return counter;
  }

  /**
   * Increments the counter by 1.
   * @returns {number} The new count value after incrementing.
   */
  increment() {
    return ++counter;
  }

  /**
   * Decrements the counter by 1.
   * @returns {number} The new count value after decrementing.
   */
  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance()); // false


// Advantages:
// Controlled Access: Ensures a single instance exists, managing shared resources effectively.
// Global Access: Provides easy access to the instance from anywhere in the application.
// Lazy Initialization: Creates the instance only when needed, saving resources.
// Consistency: Maintains a unique reference point, avoiding multiple instances.

// Disadvantages:
// Global State Issues: Introduces global state, making debugging and maintenance harder.
// Testing Challenges: Complicates unit testing and dependency injection.
// Hidden Dependencies: Can lead to tightly coupled code and unclear dependencies.
// Concurrency Risks: May cause synchronization issues in concurrent environments.
// Responsibility Violation: Can mix instantiation and logic, violating the Single Responsibility Principle.

// Best Use Cases:
// Managing shared resources (e.g., loggers, configurations).
// Providing a single point of coordination (e.g., event buses).

// When to Avoid:
// When testability and loose coupling are priorities.
// In multi-threaded applications requiring careful state management.