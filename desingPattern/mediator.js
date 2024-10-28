// The Mediator Pattern is a behavioral design pattern that promotes loose coupling between classes by introducing 
// a mediator object that handles communication between them. This pattern is particularly useful in scenarios 
// where many objects interact with each other, preventing direct connections and reducing dependencies.


/**
 * Logs a message from a user in the chatroom.
 * @param {User} user - The user who is sending the message.
 * @param {string} message - The message to be logged.
 */
logMessage(user, message) {
  const sender = user.getName();
  console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");

// Advantages:
// Reduced Complexity: By centralizing communication, the pattern simplifies the interactions among multiple objects.
// Looser Coupling: Objects do not need to be aware of each other, which allows for easier modification and maintenance.
// Easier Testing: The mediator can be tested separately from the objects it coordinates, leading to more straightforward unit tests.

// Disadvantages:
// Single Point of Failure: If the mediator fails, communication between the objects can break down entirely.
// Increased Complexity of the Mediator: As more components are added, the mediator can become overly complex, making it harder to manage.
// Performance Overhead: The additional layer of indirection can introduce performance overhead.

// When to Use:
// When you have a complex system with many interacting objects.
// When you want to reduce the dependencies between your classes.
// When you need to centralize control logic that governs the interaction between components.

