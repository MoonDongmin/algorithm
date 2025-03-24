function checkNode(node) {
  if (!node) return;

  if (promising(node)) {
    if (isSolution(node)) {
      writeSolution(node);
    } else {
      for (let child of node.children) {
        checkNode(child);
      }
    }
  }
}

function promising(node) {
  // 특정 조건을 확인하는 함수 (예제에 맞게 구현 필요)
  return true;
}

function isSolution(node) {
  // 해당 노드가 해답인지 확인하는 함수 (예제에 맞게 구현 필요)
  return false;
}

function writeSolution(node) {
  console.log('Solution found at node:', node.value);
}
