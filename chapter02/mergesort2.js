let s;
let n;

function merge2(low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let u;

  while (i <= mid && i <= high) {
    if (s[i] < s[j]) {
      u[k] = s[i];
      i++;
    } else {
      u[k] = s[j];
      j++;
    }
    k++;
    if(i>mid){
      [s[j],u[k]] = [s[high],u[high]]
    }else{

    }
  }
}

function mergesort2(low, high) {
  let mid;

  if (low < high) {
    mid = Math.floor((low + high) / 2);
    mergesort2(low, mid);
    mergesort2(mid + 1, high);
    merge2(low, mid, high);
  }
}
