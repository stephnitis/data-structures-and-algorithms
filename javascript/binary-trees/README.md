# Binary Trees

## Features

### Node

- A Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- A Binary Tree class
- A method for each of the depth first traversals:
  - pre order
  - in order
  - post order which returns an array of the values, ordered appropriately.

### Binary Search Tree

- A Binary Search Tree class
This class ise a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:

Add:

- Arguments: value
- Return: nothing
- Adds a new node with that value in the correct location in the binary search tree.

Contains:

- Argument: value
- Returns: boolean indicating whether or not the value is in the tree at least once.

### Tests

1. Can successfully instantiate an empty tree
2. Can successfully instantiate a tree with a single root node
3. For a Binary Search Tree, can successfully add a left child and right child properly to a node
4. Can successfully return a collection from a preorder traversal
5. Can successfully return a collection from an inorder traversal
6. Can successfully return a collection from a postorder traversal
7. Returns true	(false for the `contains` method, given an existing or non-existing node value)

![tree traversals diagram](./assets/Tree%20Traversals.png)
