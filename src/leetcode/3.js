class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newNode = new TreeNode(value);
      let queue = [this.root];

      while (queue.length) {
        let node = queue.shift();

        if (!node.left) {
          node.left = newNode;
          return;
        } else {
          queue.push(node.left);
        }

        if (!node.right) {
          node.right = newNode;
          return;
        } else {
          queue.push(node.right);
        }
      }
    }
  }

  find(value) {
    let node = this.root;
    if (value === node.value) {
      return node;
    }
    if (value > node.value) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  maxDepth() {
    let node = this.root;
    if (node === null) {
      return 0;
    } else {
      return Math.max(maxDepth(node.right), maxDepth(node.left)) + 1;
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.right);
    this.print(root.left);
  }
}

class TreeNode {
  constructor(value) {
    this.value = value === undefined ? 0 : value;
    this.right = null;
    this.left = null;
  }
}

//Рекурсивно проходимся по дереву, спускаемся в левую ветку, правую ветку, берем максимальную длину из этих веток и прибавляем 1. Сложность времени O(n), где n - максимальная глубина дерева, памяти O(n)
const maxDepth = (node) => {
  if (node === null) {
    return 0;
  } else {
    return Math.max(maxDepth(node.right), maxDepth(node.left)) + 1;
  }
};

// let root = [3, 9, 20, null, null, 15, 7];
// let root = [1, null, 2];

let root = [1, null, 2];
let binaryTree = new BinaryTree();

root.forEach((item) => {
  binaryTree.add(item);
});

console.log('Максимальная глубина: ', binaryTree.maxDepth());
