function order(p, i, j) {
  if (i === j) {
    process.stdout.write(`A${i}`);
  } else {
    process.stdout.write('(');
    order(p, i, p[i][j]);
    order(p, p[i][j] + 1, j);
    process.stdout.write(')');
  }
}
