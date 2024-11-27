// A linked list is a fundamental data structure in computer science. It mainly allows efficient insertion and deletion operations compared to arrays. Like arrays, it is also used to implement other data structures like stack, queue and deque. Here’s the comparison of Linked List vs Arrays

// Linked List:

// Data Structure: Non-contiguous
// Memory Allocation: Typically allocated one by one to individual elements
// Insertion/Deletion: Efficient
// Access: Sequential

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Represents a node in a linked list.
 */
class Node {
    /**
     * Creates a new Node.
     * @param {*} data - The data to be stored in the node.
     * @param {Node|null} next - The next node in the list, or null if it's the last node.
     */
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Represents a singly linked list.
 */
class LinkList {
    /**
     * Creates an empty linked list.
     */
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Inserts a new node at the beginning of the list.
     * @param {*} data - The data to be stored in the new node.
     */
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    /**
     * Appends a new node to the end of the list.
     * @param {*} data - The data to be stored in the new node.
     */
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    /**
     * Inserts a new node at a specific index in the list.
     * @param {*} data - The data to be stored in the new node.
     * @param {number} index - The index at which to insert the new node.
     */
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log('Index out of bounds');
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    /**
     * Removes a node at a specific index from the list.
     * @param {number} index - The index of the node to be removed.
     */
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log('Index out of bounds');
            return;
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            previous.next = current.next;
        }
        this.size--;
    }

    /**
     * Prints the elements of the list.
     */
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' => '));
    }

    /**
     * Checks if the list is empty.
     */
    isEmpty() {
        console.log(this.size === 0);
    }

    /**
     * Gets the size of the list.
     */
    getSize() {
        console.log(this.size);
    }
}

// Example Usage
const list = new LinkList();
list.append(10);
list.append(20);
list.append(30);
list.insertFirst(40);
list.insertAt(100, 1);
list.removeAt(2);

list.print(); // Output: 40 => 100 => 20 => 30
list.isEmpty(); // Output: false
list.getSize(); // Output: 4
