function search(tree, keyin) {
  let index = 0;

  while (index < tree.length) {
    if (tree[index] === keyin) return index;
    else if (keyin < tree[index]) index = index * 2;
    else index = index * 2 + 1;
  }

  return;
}

