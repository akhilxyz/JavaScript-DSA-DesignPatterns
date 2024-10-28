// The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, 
// but allows subclasses to alter the type of objects that will be created. It is particularly useful when the exact 
// type of object to be created isn't known until runtime.

/**
 * Creates a new user object with the provided first name, last name, and email.
 *
 * @param {{ firstName: string, lastName: string, email: string }} userData - An object containing the user's first name, last name, and email.
 * @returns {Object} - A new user object with the provided data and a fullName method.
 */
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
});
  
  const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
  });
  
  const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com"
  });
  
  console.log(user1);
  console.log(user2);

// Advantages:
// Encapsulation: The factory pattern encapsulates the instantiation logic and separates it from the client code, promoting cleaner and more maintainable code.
// Flexibility: You can easily introduce new types of objects without changing the existing code structure.
// Decoupling: The client code doesn't need to know about the specific classes being instantiated, which reduces dependencies.

// Disadvantages:
// Complexity: It can introduce additional complexity, especially if many classes are created, making it harder to understand the overall design.
// Overhead: If not needed, it may add unnecessary layers of abstraction and overhead.

// When to Use:
// When the creation process is complex or involves multiple steps.
// When the type of object to create should be determined at runtime.
// When you want to manage and encapsulate the instantiation logic of related objects.
// When dealing with a system that may need to be easily extensible in the future (adding new object types without altering existing code).
