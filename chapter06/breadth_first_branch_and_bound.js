function breadth_first_branch_and_bound(stateSpaceTree, best) {
  const Q = [];
  let v = stateSpaceTree.root;
  Q.push(v);
  best.value = v.value;

  while (Q.length > 0) {
    const u = Q.shift();

    for (const child of u.children) {
      if (child.value < best.value) {
        best.value = child.value;
      }
      if (child.bound < best.value) {
        Q.push(child);
      }
    }
  }
}
