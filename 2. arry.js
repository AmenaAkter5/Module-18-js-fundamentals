// =========================
//           ARRAY
// ========================= 

/* 

(i) It is a a variable.
(ii) It is the collection of values of a variable.
(iii) This has one more values which are separated by comma and put the values in "third bracket" [...].
(iv) Array is declared by number and string both.

*/


// Examples:

var family = ['father', 'mother', 'son', 'daughter'];

console.log(family); // output: [ 'father', 'mother', 'son', 'daughter' ]


var studentMark = [80, 75, 50];

console.log(studentMark); // output: [ 80, 75, 50 ]






// ==================================================
//                     Array Length
//          [Number of elements in an array]
// ===================================================



// (v) We can know the 'number of elements' of array by using length. [console by "arrayName.length"]


family = ['father', 'mother', 'son', 'daughter']; // [previously declared]
console.log(family.length); // output: 4


// We can declare an another variable to see the length of array.

var familyMembers = family.length;

console.log(familyMembers); // output: 4




// ==================================================
//                    MORE EXAMPLES
// ===================================================



// *****  Array  *****

var friendsAge = [11, 13, 17];
var muriChanachurFee = [34, 55, 221, 3];
var favouriteFruits = ['mango', 'litchi', 'jackfruit', 'grape', 'guava'];
var oddNumber = [1, 3, 5, 7, 9];
var vowels = ['a', 'e', 'i', 'o', 'u'];


console.log(friendsAge); // output: [ 11, 13, 17 ] 
console.log(muriChanachurFee); // output: [ 34, 55, 221, 3 ]
console.log(favouriteFruits); // output: [ 'mango', 'litchi', 'jackfruit', 'grape', 'guava' ]
console.log(oddNumber); // output: [ 1, 3, 5, 7, 9 ]
console.log(vowels); // output: [ 'a', 'e', 'i', 'o', 'u' ]




// *****  length  *****

// Know the elements number


console.log(friendsAge.length); // output: 3

var friendsAgelength = friendsAge.length; // [a variable is declared to see length]
console.log(friendsAgelength); // output: 3


// ---------------------------


console.log(muriChanachurFee.length); // output: 4

var muriChanachurFeelength = muriChanachurFee.length; // [a variable is declared to see length]
console.log(muriChanachurFeelength); // output: 4


// ---------------------------


console.log(favouriteFruits.length); // output: 5

var favouriteFruitslength = favouriteFruits.length; // [a variable is declared to see length]
console.log(favouriteFruitslength); // output: 5


// ---------------------------


console.log(oddNumber.length); // output: 5

var oddNumberlength = oddNumber.length; // [a variable is declared to see length]
console.log(oddNumberlength); // output: 5



// ---------------------------


console.log(vowels.length); // output: 5

var vowelsCount = vowels.length; // [a variable is declared to see length]
console.log(vowelsCount); // output: 5






