function binsearch(n, s, x, location) {
  let low, high, mid;

  low = 1;
  high = n;
  location = 0;
  while (low <= high && location === 0) {
    mid = [(low + high) / 2];
    if (x === s[mid])
      location = mid;
    else if (x < s[mid])
      high = mid - 1;
    else
      low = mid + 1;
  }
}
