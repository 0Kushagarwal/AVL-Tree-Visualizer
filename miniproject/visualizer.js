class AVLNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalance(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;
    newRoot.left = node;
    node.right = temp;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;
    newRoot.right = node;
    node.left = temp;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height =
      Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  insert(node, key) {
    if (!node) return new AVLNode(key);

    if (key < node.key) node.left = this.insert(node.left, key);
    else if (key > node.key) node.right = this.insert(node.right, key);
    else return node;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balance = this.getBalance(node);

    //right rotation
    if (balance > 1 && key < node.left.key) return this.rotateRight(node);
    //left rotation
    if (balance < -1 && key > node.right.key) return this.rotateLeft(node);
    //first left rotate and than right rotate.
    if (balance > 1 && key > node.left.key) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    //first right rotate and than left rotate.
    if (balance < -1 && key < node.right.key) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  deleteNode(node, key) {
    if (!node) return null;

    if (key < node.key) node.left = this.deleteNode(node.left, key);
    else if (key > node.key) node.right = this.deleteNode(node.right, key);
    else {
      //for finding leaf node or a node with one child.
      if (!node.left || !node.right) node = node.left || node.right;
      //for deleting a node with two child.
      else {
        const minNode = this.getMinValueNode(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
      }
    }

    if (!node) return null;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balance = this.getBalance(node);

    // right rotation.
    if (balance > 1 && this.getBalance(node.left) >= 0)
      return this.rotateRight(node);
    //left rotation.
    if (balance < -1 && this.getBalance(node.right) <= 0)
      return this.rotateLeft(node);
    // first rotate left and then right.
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    // first rotate right and then left.
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  getMinValueNode(node) {
    let current = node;
    while (current.left) current = current.left;
    return current;
  }

  addNode(key) {
    this.root = this.insert(this.root, key);
  }

  removeNode(key) {
    this.root = this.deleteNode(this.root, key);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const treeVisualizer = {
    tree: new AVLTree(),
    treeContainer: document.getElementById("tree"),

    clearTree() {
      const elements = this.treeContainer.querySelectorAll(".node, .line");
      elements.forEach((element) => element.remove());
    },

    drawTree(node, x, y, gap) {
      if (!node) return;

      const nodeElement = document.createElement("div");
      nodeElement.classList.add("node");
      nodeElement.innerText = node.key;
      nodeElement.style.left = `${x - 15}px`;
      nodeElement.style.top = `${y - 15}px`;
      this.treeContainer.appendChild(nodeElement);

      if (node.left) {
        this.drawLine(x, y, x - gap, y + 60);
        this.drawTree(node.left, x - gap, y + 60, gap / 2);
      }
      if (node.right) {
        this.drawLine(x, y, x + gap, y + 60);
        this.drawTree(node.right, x + gap, y + 60, gap / 2);
      }
    },

    drawLine(x1, y1, x2, y2) {
      const line = document.createElement("div");
      line.classList.add("line");
      const dx = x2 - x1;
      const dy = y2 - y1;
      const angle = Math.atan2(dy, dx);
      const length = Math.sqrt(dx * dx + dy * dy);

      line.style.transform = `rotate(${angle}rad)`;
      line.style.width = `${length}px`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;

      this.treeContainer.appendChild(line);
    },

    insertNode(key) {
      this.tree.addNode(key);
      this.clearTree();
      this.drawTree(this.tree.root, window.innerWidth / 2, 50, 100);
    },

    deleteNode(key) {
      this.tree.removeNode(key);
      this.clearTree();
      this.drawTree(this.tree.root, window.innerWidth / 2, 50, 100);
    },
  };

  window.insertNode = function () {
    const value = parseInt(document.getElementById("nodeValue").value);
    if (!isNaN(value)) {
      treeVisualizer.insertNode(value);
      document.getElementById("nodeValue").value = "";
    }
  };

  window.deleteNode = function () {
    const value = parseInt(document.getElementById("nodeValue").value);
    if (!isNaN(value)) {
      treeVisualizer.deleteNode(value);
      document.getElementById("nodeValue").value = "";
    }
  };
});
