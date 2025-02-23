function bin(n, k) {
  if (n === 0 || k === 0) return 1;

  return bin(n - 1, k - 1) + bin(n - 1, k);
}

console.log(bin(2, 1));
