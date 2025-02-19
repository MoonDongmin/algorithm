// let s;
// let n;
//
// function merge2(low, mid, high) {
//   let i = low;
//   let j = mid + 1;
//   let k = low;
//   let u;
//
//   while (i <= mid && i <= high) {
//     if (s[i] < s[j]) {
//       u[k] = s[i];
//       i++;
//     } else {
//       u[k] = s[j];
//       j++;
//     }
//     k++;
//     if(i>mid){
//       [s[j],u[k]] = [s[high],u[high]]
//     }else{
//
//     }
//   }
// }
//
// function mergesort2(low, high) {
//   let mid;
//
//   if (low < high) {
//     mid = Math.floor((low + high) / 2);
//     mergesort2(low, mid);
//     mergesort2(mid + 1, high);
//     merge2(low, mid, high);
//   }
// }


let s = [2, 5, 1, 12, 9, 3, 8];
let u = Array(s.length);

function merge2(low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;

  while (i <= mid && j <= high) {
    if (s[i] < s[j]) {
      u[k] = s[i];
      i++;
    } else {
      u[k] = s[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    u[k] = s[i];
    i++;
    k++;
  }

  while (j <= high) {
    u[k] = s[j];
    j++;
    k++;
  }

  for (let l = low; l <= high; l++) {
    s[l] = u[l];
  }
}

function mergesort2(low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergesort2(low, mid);
    mergesort2(mid + 1, high);
    merge2(low, mid, high);
  }
}

mergesort2(0, s.length - 1);
console.log(s); // [1, 2, 3, 5, 8, 9, 12]
