// The Flyweight pattern is a structural design pattern that aims to minimize memory usage by sharing as much data as possible 
// with similar objects. It is particularly useful when dealing with a large number of similar objects that share common data, 
// allowing you to save on memory and improve performance.

class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
  
  const isbnNumbers = new Set();
  const bookList = [];
  
  /**
   * Adds a new book to the list of books. If the book already exists with the same ISBN, it will return the existing book.
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} isbn - The ISBN of the book.
   * @param {boolean} availibility - Whether the book is available for purchase.
   * @param {number} sales - The number of copies sold.
   * @returns {Object} The newly added or existing book object.
   */
  const addBook = (title, author, isbn, availibility, sales) => {
    const book = {
      ...createBook(title, author, isbn),
      sales,
      availibility,
      isbn
    };

    bookList.push(book);
    return book;
  };
  
  const createBook = (title, author, isbn) => {
    const book = isbnNumbers.has(isbn);
    if (book) {
      return book;
    } else {
      const book = new Book(title, author, isbn);
      isbnNumbers.add(isbn);
      return book;
    }
  };
  
  addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
  addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
  addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
  addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
  addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);
  

  console.log("Total amount of copies: ", bookList);
  console.log("Total amount of copies: ", bookList.length);
  console.log("Total amount of books: ", isbnNumbers.size);

// Advantages:
// Reduced Memory Usage: By sharing common data, it minimizes the memory footprint.
// Improved Performance: Reduces the overhead of object creation, which can lead to faster execution.

// Disadvantages:
// Complexity: The implementation can become complex, especially when managing shared and unique state.
// Difficulty in Maintaining State: It can be challenging to manage the state of shared data across multiple instances.


// When to Use Flyweight Pattern:
// Large Number of Objects: When you need to create many instances of similar objects, like characters in a text editor or trees in a game.
// Memory Constraints: When memory usage is a concern and sharing data between instances can significantly reduce the footprint.
// Performance Improvement: When reducing the creation and management overhead of numerous objects can lead to performance gains.