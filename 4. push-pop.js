// =================================
//                 PUSH
// =================================


// Push- Add elements to an array [It will be added as last element of array]

// 1.

var lastBench = ['salam', 'balam', 'kalam'];
console.log(lastBench); // output: [ 'salam', 'balam', 'kalam' ]

lastBench.push('alam');
console.log(lastBench); // output: [ 'salam', 'balam', 'kalam', 'alam' ]

lastBench.push('mobil', 'robin');
console.log(lastBench); // output: [ 'salam', 'balam', 'kalam', 'alam', 'mobil', 'robin' ]






// =================================
//                 POP
// =================================


// pop- Remove an element from an array. [It will remove the last element of an array]


lastBench = ['salam', 'balam', 'kalam'];
console.log(lastBench); // output: [ 'salam', 'balam', 'kalam' ]

lastBench.pop();
console.log(lastBench); // output: [ 'salam', 'balam' ] (kalam is removed from array)




// If there have no elements to remove then the output will be []

// We can keep the removed item from an array as a value of another variable. We need to declare a variable to keep the removed item from an array.


var lastStudent = lastBench.pop();
console.log(lastStudent); // output: kalam [we can keep the removed data]






// =====================================
//                 Summary
// ======================================


// ***** Summary [video- 10:00]

/* H.W.
===========

*** Google Search:
Javascript remove first item from an array
& Javascript array add element in the begining.

*/





// =====================================
//                 Examples
// ======================================


// push

var friendsAge = [11, 13, 17, 12];
console.log(friendsAge); // output: [ 11, 13, 17, 12 ]

friendsAge.push(15);
console.log(friendsAge); // output: [ 11, 13, 17, 12, 15 ]


// pop

friendsAge.pop();
console.log(friendsAge); // [ 11, 13, 17 ] (12 is removed from array.)

var lastItem = friendsAge.pop();
console.log(lastItem); // output: 12 [we can keep the removed data]