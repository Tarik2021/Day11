var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  myNewPets.push("Bird", "Fish");
  // dodaj na kraj [Dog, Cat, Bird, Fish]

  var firstPet = myNewPets.shift();
  // izbrisi prvi item u arrayu tj. "Dog"
  var lastPet = myNewPets.pop();
  // izbrisi zadnji item u arrayu tj. "Fish"
  //sad je [Cat, Bird]

  myNewPets.unshift("Lion");
  //dodaj na pocetak [Lion, Cat, Bird ]
  return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
