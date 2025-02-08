let n, s, x;

function location(low, high) {
  let mid;

  if (low > high) return 0;
  else {
    mid = (low + high) / 2;
    if (x === s[mid]) {
      return mid;
    } else if (x < s[mid]) return location(low, mid - 1);
    else return location(mid + 1, high);
  }
}
