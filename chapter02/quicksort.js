function quicksort(s) {
  if (s.length <= 1) {
    return s;
  }

  let pivotPoint = s[0];
  let left = Array();
  let right = Array();

  for (let i = 1; i < s.length; i++) {
    if (s[i] < pivotPoint) {
      left.push(s[i]);
    } else {
      right.push(s[i]);
    }
  }

  return quicksort(left).concat(pivotPoint, quicksort(right));
}

console.log(quicksort([10, 15, 3, 50]));
