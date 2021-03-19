function myBouncer(arr) {
  var myFilterArray = arr.filter(Boolean);
  return myFilterArray;
}
console.log(myBouncer([7, "ate", "", false, 9]));
module.exports = myBouncer;
