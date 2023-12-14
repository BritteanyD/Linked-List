class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }
  append = (value) => {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
  };
  prepend = (value) => {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      const oldHeadNode = this.headNode;
      //1-2-3-null
      //0-1-2-3-null
      newNode.nextNode = oldHeadNode;
      this.headNode = newNode;
    }
  };
  size = () => {
    let currentNode = this.headNode;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  };
  head = () => {
    return this.headNode;
  };
  tail = () => {
    return this.tailNode;
  };
  at = (index) => {
    let currentNode = this.headNode;
    let myIndex = 0;
    while (currentNode) {
      if (myIndex === index) {
        return currentNode;
      }
      myIndex++;
      currentNode = currentNode.nextNode;
    }
    return null;
  };
  find = (value) => {
    let currentNode = this.headNode;
    let myIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return myIndex;
      }
      myIndex++;
      currentNode = currentNode.nextNode;
    }
    return null;
  };
  pop = () => {
    let currentNode = this.headNode,
      previousNode = null;
    while (currentNode !== this.tailNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    this.tailNode = previousNode;
    previousNode.nextNode = null;
    return currentNode;
  };
  contains = (value) => {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  };
  toString = () => {
    let currentNode = this.headNode;
    let result = "";
    while (currentNode) {
      result += "(" + currentNode.value + ")->";
      currentNode = currentNode.nextNode;
      //( value ) -> ( value ) -> ( value ) -> null
    }
    return result + "null";
  };
}

const myLinkedList = new LinkedList();
console.log(myLinkedList.toString());
myLinkedList.append(1);
console.log(myLinkedList.toString());

myLinkedList.append(2);
console.log(myLinkedList.toString());
myLinkedList.append(3);
console.log(myLinkedList.toString());
console.log(myLinkedList.size());
console.log(myLinkedList.at(0));
console.log(myLinkedList.at(2));

console.log(myLinkedList.find(3));
console.log(myLinkedList.find(300));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.toString());

console.log("contains 3");
console.log(myLinkedList.contains(3));
console.log("contains 18");
console.log(myLinkedList.contains(18));

console.log(myLinkedList.pop());
console.log(myLinkedList.toString());
