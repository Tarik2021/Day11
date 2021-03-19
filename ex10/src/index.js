function mySplice(arr1, arr2, n) {
  for (var i = 0; i < arr1.length; i++) {
    arr2.splice(n + i, 0, arr1[i]);
  }
  return arr2;
}
console.log(mySplice());
module.exports = mySplice;
