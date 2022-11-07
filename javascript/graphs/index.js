'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// connects one node to another
// directed edge has a starting and ending vertex
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  //vertex stores something
  addVertex(value) {
    const vertex = new Vertex(value);
    // takes vertex and a place to store edges
    //key is the vertex or the node itself and the value will become its edges
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex) {
    //want to find the node we want to connect to
    //based on the start we will grab the starting vertex
    //the key points us to the vertex, and getting it at that hash returns the array
    //thus neighbors is an array
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex));
  }

  getNeighbors(vertex) {
    // returns a deep copy to preserve data
    return [...this.adjacencyList.get(vertex)];
  }

  // breadth first traversal
  // if you don't pass in a callback, it gives you a function, otherwise if you do pass one it will use that function
  // breadthFirst(root, callback = () => {}){
  //otherwise use the callback in if statement
  breadthFirst(root, callback) {
    const queue = [root];
    //behavior that mimics a queue in that array
    const visited = new Set();
    visited.add(root);
    let current = null;
    while (queue.length) {
      current = queue.pop();

      if (callback) callback(current.value);

      //grab neighbors for block party if they exist
      //remember, neighbors is an array of all of the edges
      const neighbors = this.getNeighbors(current);
      //in doing this each element in the neighbors array can be referred to as edge
      //strengthen your array knowledge bitch
      for (let edge of neighbors) {
        //conditional
        if (!visited.has(edge.vertex)) {
          //edge is a specific node in our array
          //edge has a property of vertex
          visited.add(edge.vertex);
          //put into queue so we can keep track of what we have visited
          //unshift will put into the front of the array
          queue.unshift(edge.vertex);
        }
      }
    }
    //visited is a set
    return visited;
  }
}

