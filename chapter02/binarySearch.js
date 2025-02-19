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


function binarySearch(target, arr) {
  let answer;

  // 낮은 수 -> 높은 수 정렬
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else if (arr[mid] < target) {
      lt = mid + 1;
    }
  }
  return answer;
}
