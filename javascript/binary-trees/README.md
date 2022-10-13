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

## Code Challenge 16

## branch: tree-max

### Method for the Binary Tree class

- find maximum value
- Arguments: none
- Returns: number

### Approach

We must visit every node to figure out maximum. So the idea is to traverse the given tree and for every node return maximum of 3 values.

1. Node’s data.
2. Maximum in node’s left subtree.
3. Maximum in node’s right subtree.

**Time Complexity: O(N).**
In the recursive function calls, every node of the tree is processed once and hence the complexity due to the function is O(N) if there are total N nodes in the tree. Therefore, the time complexity is O(N).

**Space Complexity: O(N).**
Recursive call is happening. The every node is processed once and considering the stack space, the space complexity will be O(N).

![find max whiteboard](./assets/Binary%20Tree_%20Find%20Max.png)

## Code Challenge 18

## branch: tree-fizz-buzz

![tree fizz buzz whiteboard](./assets/Code%20Challenge%2018.png)
