// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(item) {
//     return this.queue.push(item);
//   }

//   dequeue() {
//     return this.queue.length ? this.queue.shift() : null;
//   }

//   peek() {
//     return this.queue[this.length - 1];
//   }

//   get length() {
//     return this.queue.length;
//   }

//   isEmpty() {
//     return this.queue.length === 0;
//   }
// }

class LinkedListNode {
  constructor(value) {
    // adding value, left, right properties through the constructor
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Is there a next property?
    if (!this.left) {
      // if no, then this right node can be our next
      this.right = node;
    } else {
      // if yes, then go to current next node
      this.left.add(node);
    }
  }
}

// Test Cases
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
