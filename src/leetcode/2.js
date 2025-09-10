//Связный список
class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    } else {
      let node = this.root;
      while (node.next) {
        node = node.next;
      }
      let newNode = new Node(value);
      node.next = newNode;
      this.size += 1;
    }
  }

  reverse() {
    if (!head) return null;
    let firstNode = this.root;
    let node = this.root;
    let nextNode = node.next;
    let parentNode = null;
    while (node.next) {
      node.next = parentNode;
      parentNode = node;
      node = nextNode;
      nextNode = nextNode.next;
    }
    node.next = parentNode;
    firstNode = node;
    this.root = parentNode;
  }

  print() {
    let node = this.root;
    while (node) {
      console.log(node.value);

      node = node.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//В цикле будем проходится по всем узлам и будем использовать три переменнеы: предыдуший узел, текущий узел и следщий узел.
//На первой итерации предыдущий узел будет null. Тело цикла: делаем чтобы текущий узел ссылался на предыдущий узел, меняем предыдущий узел на текущий, текущий - на следущий, следущий это ссылка на которую ссылается следщий элемент. Грубо говоря мы  укаждого элемента меняем его ссылки на предыдущий узел. Сложность времени O(n), памяти O(1)

var reverseList = function (head) {
  if (!head) return null;
  let firstNode = head;
  let node = head;
  let nextNode = node.next;
  let parentNode = null;
  while (node.next) {
    node.next = parentNode;
    parentNode = node;
    node = nextNode;
    nextNode = nextNode.next;
  }
  node.next = parentNode;
  firstNode = node;
  return firstNode;
};

let linkedList = new LinkedList();

let head = [1, 2, 3, 4, 5];

head.forEach((item) => {
  linkedList.add(item);
});

linkedList.print();
linkedList.reverse();
linkedList.print();
