**AVL Tree Visualizer**

This project provides a web-based visualizer for an AVL Tree, a self-balancing binary search tree. It helps you understand how AVL trees work by allowing you to insert and delete nodes and see the tree rebalance in real-time.

_**About the Project**_

An AVL tree, named after its inventors Adelson-Velsky and Landis, is a special kind of binary search tree (BST). It automatically balances itself to ensure that the height difference between the left and right subtrees of any node is never greater than 1. This strict balancing guarantees a time complexity of O(logn) for search, insertion, and deletion operations, making it highly efficient.

The visualizer demonstrates the core mechanics of an AVL tree, including the four main types of rotations that keep the tree balanced.

_**Key Features**_
Interactive Visualization: Add and remove nodes and watch the AVL tree adjust dynamically.

Self-Balancing: See firsthand how rotations are performed to maintain the tree's balanced state.

Informative: Learn about the characteristics, advantages, and disadvantages of AVL trees.

Clear Code: The visualizer.js file provides a clear implementation of the AVL tree data structure in JavaScript, including methods for insertion, deletion, and rotation.

_**Rotations**_

To maintain balance, an AVL tree performs one or more of the following rotations:

Left-Left Rotation: Occurs when a node is inserted into the left subtree of a left subtree.

Right-Right Rotation: Occurs when a node is inserted into the right subtree of a right subtree.

Left-Right Rotation: A combination of a left rotation followed by a right rotation.

Right-Left Rotation: A combination of a right rotation followed by a left rotation.

The rotations.html file provides a visual breakdown of each rotation type.

_**Technologies Used**_

HTML: Provides the structure of the web pages.

CSS: Styles the tree nodes, lines, and user interface elements, including a cool glowborder animation.

JavaScript: Powers the AVL tree logic and the dynamic visualization.

_**File Structure**_

main.html: The main landing page with links to other sections.

introduction.html: Contains a general introduction to AVL trees.

rotations.html: Explains the different types of AVL tree rotations.

visualizer.html: The interactive AVL tree visualizer.

visualizer.js: The core JavaScript logic for the AVL tree data structure and the visualizer.

visualizer.css: Styles for the visualizer page.

main.css: General styles for the main pages.

introduction.css: Styles specific to the introduction page.

rotations.css: Styles specific to the rotations page.

images/: Directory for rotation images.
