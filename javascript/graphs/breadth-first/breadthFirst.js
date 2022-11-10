function breadthFirst(graph, startNode) {
  const queue = [];
  const visitedNodes = new Set();

  queue.push(startNode);
  visitedNodes.add(startNode);

  while (queue.length) {
    const currentNode = queue.shift();
    const neighbors = graph[currentNode];

    for (let neighbor of neighbors) {
      if (visitedNodes.has(neighbor)) {
        continue;
      }
      visitedNodes.add(neighbor);
      queue.push(neighbor);
    }
  }
  console.log('queue', queue);
  return visitedNodes;
}

module.exports = breadthFirst;
