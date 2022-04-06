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

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }
  // add node
  add(node) {
    // assume value already in tree, nothing to add
    if(node.value === this.value) {
      return;
    }

    // adding to left and to right
    if(node.value < this.value) {
      if(!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if(!this.right) this.right = node;
      else this.right.add(node);
    }
  }
  // find person node
  findPerson(name) {
    return this.value === name ? this.person
  }
}
