var temps = [
  [31, 31, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];
function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  for (var i = 0; i < newTemps.length; i++) {
    var sumOfDayTemp = 0;
    var j;
    for (j = 0; j < newTemps[i].length; j++) {
      sumOfDayTemp += newTemps[i][j];
    }
    averageDayTemp[i] = sumOfDayTemp / j;
  }
  return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
