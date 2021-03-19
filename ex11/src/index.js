function splitArrayInGroups(arr, n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result[i] = arr.slice(0, n);
    arr = arr.slice(n);
  }
  return result;
}
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;
