const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.end = null;
    this.start = null;
  }
  enqueue(value) {
    const node = new ListNode(value);

    if (!this.end) {
      this.end = node;
      this.start = node;
    } else {
      this.start.next = node;
      this.start = node;
    }

    return this.getUnderlyingList();
  }

  dequeue() {
    if (!this.end) {
      return null;
    }

    const removedValue = this.end.value;
    this.end = this.end.next;

    if (!this.end) {
      this.start = null;
    }

    return removedValue;
  }

  getUnderlyingList() {
    return this.end;
  }
}


module.exports = {
  Queue
};
