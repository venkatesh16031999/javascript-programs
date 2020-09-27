var unsortedArr = [6,4,2,3,6,4,2,3,3,64];
function merge(leftArr, rightArr) {
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  if (leftArr.length)
    sortedArr.push(...leftArr.slice(0));
  if (rightArr.length)
    sortedArr.push(...rightArr.slice(0));
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
console.log("["+mergesort(unsortedArr).toString()+"]");
