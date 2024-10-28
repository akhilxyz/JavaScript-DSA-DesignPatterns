// The Command Pattern is a behavioral design pattern that encapsulates a request as an object, 
// allowing you to parameterize clients with queues, requests, and operations. This pattern is particularly useful 
// for implementing actions that can be undone or queued, enabling more flexible and maintainable code.


// Key Components:
// Command: An interface or abstract class defining an operation.
// Concrete Command: Implements the command interface, defining the binding between a receiver and an action.
// Receiver: The object that performs the actual work when the command is executed.
// Invoker: The object that holds the command and calls the execute method on the command when needed.


class OrderManager {
    constructor() {
      this.orders = [];
    }
  
    execute(command, ...args) {
      return command.execute(this.orders, ...args);
    }
  }
  
  class Command {
    constructor(execute) {
      this.execute = execute;
    }
  }
  
  function PlaceOrderCommand(order, id) {
    return new Command(orders => {
      orders.push(id);
      console.log(`You have successfully ordered ${order} (${id})`);
    });
  }
  
  function CancelOrderCommand(id) {
    return new Command(orders => {
      orders = orders.filter(order => order.id !== id);
      console.log(`You have canceled your order ${id}`);
    });
  }
  
  function TrackOrderCommand(id) {
    return new Command(() =>
      console.log(`Your order ${id} will arrive in 20 minutes.`)
    );
  }
  
  const manager = new OrderManager();
  
  manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
  manager.execute(new TrackOrderCommand("1234"));
  manager.execute(new CancelOrderCommand("1234"));


// Advantages
// Decoupling: The invoker and receiver are decoupled, making the system more flexible.
// Undo/Redo functionality: Commands can be stored and easily undone or redone.
// Command Queuing: You can queue commands for later execution.
// Logging: Commands can be logged for auditing purposes.

// Disadvantages
// Overhead: May add complexity and overhead due to the number of classes involved.
// Maintenance: If many commands are created, managing them can become cumbersome.

// When to Use
// When you need to parameterize objects with operations.
// When you want to support undoable operations.
// When you want to queue operations or log them.
// When you want to decouple the sender of a request from its receiver.