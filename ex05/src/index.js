var myNestedArray = [
  ["Toblerone", 5],
  ["Milka", 3],
];
function myNestedFunction(arr) {
  var arr = [...arr];
  return arr;
}
console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;
