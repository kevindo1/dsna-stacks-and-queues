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
    // adding value and next properties through the constructor
    this.value = value;
    this.next;
  }

  add(node) {
    // Is there a next property?
    if (!this.next) {
      // if no, then this next node can be our next
      this.next = node;
    } else {
      // if yes, then go to current next node
      this.next.add(node);
    }
  }
}
