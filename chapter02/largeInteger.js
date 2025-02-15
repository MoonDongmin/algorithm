function largeInteger(u, v) {
  let n = Math.max(u.toString().length, v.toString().length);
  if (n <= 1) return u * v;

  let m = Math.floor(n / 2);
  let power = Math.pow(10, m);

  let x = Math.floor(u / power);
  let y = u % power;
  let w = Math.floor(v / power);
  let z = v % power;

  let p1 = largeInteger(x, w);
  let p2 = largeInteger(x, z);
  let p3 = largeInteger(w, y);
  let p4 = largeInteger(y, z);

  return p1 * Math.pow(10, 2 * m) + (p2 + p3) * power + p4;
}

console.log(largeInteger(10000000, 223423441));
