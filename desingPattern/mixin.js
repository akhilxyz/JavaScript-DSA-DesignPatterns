// The Mixin Pattern in JavaScript is a way to add properties and methods from one object to another, 
// allowing for a form of multiple inheritance. This is particularly useful for sharing functionality 
// across different classes or objects without needing a strict class hierarchy.

/**
 * The Dog class represents a pet dog with a name and various functionalities.
 * @constructor
 * @param {string} name - The name of the dog.
 */
class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  const animalFunctionality = {
    /**
     * Walks the animal.
     */
    walk: () => console.log("Walking!"),
    /**
     * Sleeps the animal.
     */
    sleep: () => console.log("Sleeping!")
  };

  const dogFunctionality = {
    __proto__: animalFunctionality,
    /**
     * Makes the dog bark.
     */
    bark: () => console.log("Woof!"),
    /**
     * Makes the dog wag its tail.
     */
    wagTail: () => console.log("Wagging my tail!"),
    /**
     * Makes the dog play.
     */
    play: () => console.log("Playing!"),
    /**
     * Walks the dog.
     * @override
     */
    walk() {
      super.walk();
    },
    /**
     * Sleeps the dog.
     * @override
     */
    sleep() {
      super.sleep();
    }
  };

  Object.assign(Dog.prototype, dogFunctionality);

  const pet1 = new Dog("Daisy");

  console.log(pet1.name);
  pet1.bark();
  pet1.play();
  pet1.walk();
  pet1.sleep();


// Advantages:
// Code Reusability: Mixins allow you to reuse code across multiple classes, avoiding duplication.
// Flexibility: You can mix and match functionalities, enabling you to compose complex objects without rigid class hierarchies.
// Separation of Concerns: You can keep related functionalities grouped together, making your codebase easier to understand and maintain.

// Disadvantages:
// Complexity: Excessive use of mixins can lead to complexity and make it harder to trace the flow of properties and methods.
// Name Collisions: If multiple mixins define the same method, it can lead to unexpected behavior unless carefully managed.
// Lack of Clarity: It may become less clear which methods are coming from which mixin, leading to confusion for someone reading the code.

// When to Use:
// Sharing Functionality: When you have functionalities that can be shared across multiple classes but don't fit well into a single class hierarchy.
// Avoiding Inheritance Issues: When you want to avoid the problems associated with deep inheritance chains, such as tight coupling or fragility.