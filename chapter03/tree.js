class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function buildOptimalBST(keys, R, i, j) {
  if (i > j) return null;

  let rootIndex = R[i][j];
  if (rootIndex === 0) return null;

  let root = new TreeNode(keys[rootIndex - 1]);

  // 왼쪽 서브트리 생성
  root.left = buildOptimalBST(keys, R, i, rootIndex - 1);
  // 오른쪽 서브트리 생성
  root.right = buildOptimalBST(keys, R, rootIndex + 1, j);

  return root;
}

let keys = ['A', 'B', 'C', 'D'];
let R = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 3],
  [0, 0, 2, 3, 3],
  [0, 0, 0, 3, 3],
  [0, 0, 0, 0, 4],
];

let optimalBST = buildOptimalBST(keys, R, 1, keys.length);

function printTree(node, prefix = '', isLeft = true) {
  if (node !== null) {
    console.log(prefix + (isLeft ? '├── ' : '└── ') + node.key);
    printTree(node.left, prefix + (isLeft ? '│   ' : '    '), true);
    printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
  }
}

// 트리 출력
printTree(optimalBST);
