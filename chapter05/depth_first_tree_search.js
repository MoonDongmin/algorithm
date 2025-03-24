function depthFirstTreeSearch(node) {
  if (!node) return;

  visit(node); // 노드 방문

  for (let child of node.children) {
    depthFirstTreeSearch(child);
  }
}

function visit(node) {
  console.log('방문한 노드: ', node.value);
}
