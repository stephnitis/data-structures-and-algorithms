'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

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

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight){
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('Invalid Vertex');
    }
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  // addDirectedEdge(startVertex, endVertex) {
  //   const neighbors = this.adjacencyList.get(startVertex);
  //   neighbors.push(new Edge(endVertex));
  // }

  getNodes(){
    let nodes = [];
    for(const [vertex, edge] of this.adjacencyList.entries()) {
      nodes.push(vertex);
    }
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)){
      throw new Error('Invalid Vertex');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startNode){
    if(!startNode){
      return null;
    }
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);
    while(queue.length){
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  // breadthFirst(root, callback) {
  //   const queue = [root];
  //   const visited = new Set();
  //   visited.add(root);
  //   let current = null;
  //   while (queue.length) {
  //     current = queue.pop();
  //     if (callback) callback(current.value);
  //     const neighbors = this.getNeighbors(current);
  //     for (let edge of neighbors) {
  //       if (!visited.has(edge.vertex)) {
  //         queue.unshift(edge.vertex);
  //       }
  //     }
  //   }
  //   return visited;
  // }

  size(){
    let size = 0;
    for(let key of this.adjacencyList.keys()){
      size++;
    }
    return size;
  }
}

module.exports = Graph;
