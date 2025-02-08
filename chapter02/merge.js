function merge(h, m, u, v) {
  let s = [];
  let uLength = 0;
  let vLength = 0;

  while (uLength < h && vLength < m) {
    if (u[uLength] > v[vLength]) {
      s.push(v[vLength]);
      vLength++;
    } else {
      s.push(u[uLength]);
      uLength++;
    }
  }

  return s.concat(u.slice(uLength)).concat(v.slice(vLength));
}

console.log(merge(4, 4, [10, 12, 20, 27], [13, 15, 22, 25]));
