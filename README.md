# 🌳 AVL Tree Visualizer

An interactive web-based educational tool for learning and visualizing **AVL Trees** — a self-balancing Binary Search Tree. Built with pure HTML, CSS, and JavaScript.

---

## 📌 Overview

This project provides a multi-page educational experience covering the theory, rotations, and live visualization of AVL Trees. Users can insert and delete nodes in real time and watch the tree balance itself automatically.

---

## 🗂️ Project Structure

```
├── main.html               # Home/landing page with navigation
├── main.css                # Styles for the home page
│
├── introduction.html       # Introduction to AVL Trees
├── introduction.css        # Styles for the introduction page
│
├── rotations.html          # Explanation of all 4 rotation types
├── rotations.css           # Styles for the rotations page
│
├── visualizer.html         # Interactive AVL Tree visualizer
├── visualizer.css          # Styles for the visualizer page
├── visualizer.js           # AVL Tree logic + DOM rendering
│
└── images/
    ├── left.jpg            # Left Left Rotation diagram
    ├── right.jpg           # Right Right Rotation diagram
    ├── leftright.jpg       # Left Right Rotation diagram
    └── rightleft.jpg       # Right Left Rotation diagram
```

---

## 📄 Pages

### 🏠 Home (`main.html`)
The landing page with navigation buttons to the three sections:
- Introduction
- Rotations
- AVL Tree Visualizer

### 📖 Introduction (`introduction.html`)
Covers the theoretical background of AVL Trees:
- **Definition** — What is an AVL Tree (Adelson-Velsky and Landis Tree)
- **Key Points** — Balance factor rules
- **Characteristics** — Self-balancing, BST properties
- **Advantages** — O(log n) operations, sorted traversal
- **Disadvantages** — Complex implementation, rotation overhead

### 🔄 Rotations (`rotations.html`)
Explains all four AVL rotation cases with diagrams:

| Rotation | Also Known As | Description |
|----------|--------------|-------------|
| Left Left | Left Skew Tree | Single right rotation |
| Right Right | Right Skew Tree | Single left rotation |
| Left Right | — | Left rotation then right rotation |
| Right Left | — | Right rotation then left rotation |

### 🖥️ Visualizer (`visualizer.html` + `visualizer.js`)
An interactive canvas where users can:
- **Insert** nodes into the AVL Tree
- **Delete** nodes from the AVL Tree
- Watch the tree **auto-balance** and re-render after every operation

---

## ⚙️ How It Works

The AVL Tree logic is implemented from scratch in `visualizer.js`:

- `AVLNode` class — Stores key, left/right children, and height
- `AVLTree` class — Handles insertion, deletion, rotations, and balance factor calculations
- DOM rendering — Nodes are drawn as `div` elements with absolute positioning; edges are drawn as rotated `div` lines

---

## 🚀 Usage

No installation or build step required. Just open the project in a browser:

```bash
# Clone the repository
git clone https://github.com/your-username/avl-tree-visualizer.git

# Open the home page
open main.html
```

Or simply double-click `main.html` to launch it in your default browser.

> ⚠️ Make sure all files are kept in the same directory and the `images/` folder contains all four rotation diagrams.

---

## 🎨 Design

- **Theme:** Dark background (`#000`) with glowing blue (`#1a5582`) borders and accents
- **Responsive:** Dimensions are `vw`-based for fluid scaling
- **Animations:** CSS `glowborder` keyframe animation on hover and focus states

---

## 🖼️ Images Required

Place the following images inside an `images/` folder:

| File | Content |
|------|---------|
| `left.jpg` | Left Left Rotation diagram |
| `right.jpg` | Right Right Rotation diagram |
| `leftright.jpg` | Left Right Rotation diagram |
| `rightleft.jpg` | Right Left Rotation diagram |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | AVL Tree logic and DOM-based rendering |

