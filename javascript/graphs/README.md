# Graphs

## Author: Stephanie Hill

### Branch Name: graph

### Features

Implementation of a graph, represented as an adjacency list

#### Methods Included

add node:

- Arguments: value
- Returns: The added node
- Adds a node to the graph

add edge:

- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing
- Adds a new edge between two nodes in the graph
- If specified, assign a weight to the edge
- Both nodes should already be in the Graph

get nodes:

- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)
- Empty collection returned if there are no nodes

get neighbors:

- Arguments: node
- Returns a collection of edges connected to the given node
- Include the weight of the connection in the returned collection
- Empty collection returned if there are no nodes

size:

- Arguments: none
- Returns the total number of nodes in the graph
- 0 if there are none

### Branch Name: graph-breadth-first

### Breadth First Features

- breadth first
- Arguments: Node
- Return: A collection of nodes in the order they were visited.
- Display the collection

#### References

- [Demo Code](https://github.com/codefellows/seattle-code-javascript-401d48/blob/main/class-35/inclass-demo/index.js)
- [Geeks for Geeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
- [code fellows](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)
- [GRAPH THEORY (DATA STRUCTURE)](https://seeve.medium.com/graph-theory-data-structure-89c7423de878)
- [Learn JavaScript Graph Data Structure](https://jarednielsen.com/data-structure-graph-javascript/)
- [Graph Data Structures in JavaScript for Beginners](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/)
- [Friend Luis](https://github.com/RosalesJr/data-structures-and-algorithms)
