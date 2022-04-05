class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.length ? this.queue.shift() : null;
  }

  peek() {
    return this.queue[this.length - 1];
  }

  get length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
