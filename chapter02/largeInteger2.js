function largeInteger2(u, v) {
  let n = Math.max(u.toString().length, v.toString().length);
  if (n <= 1) return u * v;

  let m = Math.floor(n / 2);
  let power = Math.pow(10, m);

  let x = Math.floor(u / power);
  let y = u % power;
  let w = Math.floor(v / power);
  let z = v % power;

  let r = largeInteger2(x + y, w + z);
  let p = largeInteger2(x, w);
  let q = largeInteger2(y, z);

  return p * Math.pow(10, 2 * m) + (r - p - q) * Math.pow(10, m) + q;
}

console.log(largeInteger2(10000000, 223423441));
