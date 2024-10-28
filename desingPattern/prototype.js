// The Prototype Pattern is a creational design pattern used in JavaScript that allows you to create objects based on a template of 
// an existing object through cloning. This pattern is particularly useful when the cost of creating a new instance of an object 
// is more expensive than cloning an existing one.

// Key Concepts
// Prototype: In JavaScript, every object has a prototype, which is another object from which it can inherit properties and methods. 
// The prototype can be used as a template to create new objects.

// Cloning: Instead of creating a new object from scratch, you create a new object by copying the properties of an existing 
// object (the prototype).


/**
 * Class representing a dog.
 */
class Dog {
    /**
     * Constructor for a new Dog instance.
     * @param {string} name - The name of the dog.
     */
    constructor(name) {
      this.name = name;
    }

    /**
     * Makes the dog bark.
     * @returns {string} - The sound the dog makes.
     */
    bark() {
      return `Woof!`;
    }
  }

  const dog1 = new Dog("Daisy");
  const dog2 = new Dog("Max");
  const dog3 = new Dog("Spot");

  Dog.prototype.play = () => console.log("Playing now!");

  console.log(dog1.name);
  dog1.play();

// Advantages:
// Performance Improvement: Cloning objects can be more efficient than creating new instances, especially
//  if the object creation involves a lot of setup.
// Dynamic Object Creation: It allows you to create new objects on-the-fly based on existing objects, 
//  which can be useful in applications where the object types are determined at runtime.
// Simpler Object Construction: You can create complex objects using a simple prototype, 
//  making the code cleaner and easier to manage.

// Disadvantages:
// Complexity: Understanding prototype chains can be complex for developers who are not familiar 
//  with JavaScript's prototypal inheritance.
// Inheritance Issues: If the prototype has mutable properties, changes to the prototype will affect all objects created from it, 
//  potentially leading to unintended side effects.
// Debugging Difficulty: Debugging issues with prototype chains can be challenging due to the dynamic nature of object
//  creation and inheritance in JavaScript.

// When to Use the Prototype Pattern:
// When you need to create many similar objects and want to avoid the overhead of repeated construction.
// When you want to share methods and properties among instances to save memory.
// When the initialization of an object involves complex logic that can be encapsulated in a prototype.