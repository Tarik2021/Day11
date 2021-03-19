function myMutation(arr) {
  //first split the arr into the two inputs and convert all to lower case
  var firstArray = arr[0].toLowerCase().split("");
  var secondArray = arr[1].toLowerCase().split("");
  //now using the code provided by the above comment which is really clean
  var count = 0;
  for (var i = 0; i < secondArray.length; i++) {
    if (firstArray.indexOf(secondArray[i]) > -1) {
      count++;
    }
  }
  if (count == secondArray.length) {
    return true;
  }
  //changed the code provided above to handle the true/false criteria of the excercise
  else {
    return false;
  }
}
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
module.exports = myMutation;
