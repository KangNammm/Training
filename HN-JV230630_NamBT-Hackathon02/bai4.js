function sort(a, b) {
  return b - a;
}

let a = [3, 25, 38, 49, 12];
console.log(a.sort(sort));


// ko su dung sort


arr = [3, 25, 38, 49, 12];

function noSort(arr) {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) {
        let number = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = number;
      }
    }
  }
  return newArr;
}
console.log(noSort(arr));
