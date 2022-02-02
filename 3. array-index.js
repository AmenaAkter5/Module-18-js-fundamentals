// =================================
//           ARRAY INDEX
// =================================


/* ******     Index of Elements   ******
==========================================


// Here we can find 'index' of elements.


1. We can know the position of any elements of array by using index number of them. Index number means their position in array. Array index is starting from 0. It means 0, 1, 2 , 3.... is index of array.

2. It is like Book Index. Book index says the chapter's page chronologically.

3. To know the position of any elements of an array we use "indexOf(element)".

4. We use "indexOf(...)" to know the 'position of elements' on array. 
[console by "arrayName.indexOf(...)"]

*/


var family = ['father', 'mother', 'son', 'daughter'];

console.log(family.indexOf('son')); // output: 2 [index of "son"]


// We can know the index / position of 'son' by declaring an another variable also.

var sonIndex = family.indexOf('son');

console.log(sonIndex); // output: 2 [index of "son"]








// ================================================
//           Index of Non-exist element
// =================================================

/*

If any value is not exist in array then by calling its element we see that the index number of element is -1.

[It means it has no positin / existence in array because position takes the value 0 or more than o. It doesn't take negative value.]

*/

family = ['father', 'mother', 'son', 'daughter'];

console.log(family.indexOf('son-in-law')); // output: -1 [It has no existence in array.]


// We can know the index / position of son-in-law by declaring an another variable also.

var sonInLawIndex = family.indexOf('son-in-law');

console.log(sonInLawIndex); // output: -1 [It has no existence in array.]








// ================================================
//            Find element by index number
// =================================================


// We can know the elements by telling the index number of an array.[console by "arrayName[index number]"


family = ['father', 'mother', 'son', 'daughter'];

console.log(family[3]); // output: daughter [element in index 3]

// We can see the elements by index number in declaring an another variable:

var thirdIndex = family[3];

console.log(thirdIndex); // output: daughter [element in index 3]









// =======================================================
//              Replace element by index number
//     [Remove and add another number in same position]
// ========================================================



// We can replace the element by fix an another value for any index of an array.

// [set value by "arrayName[index number] = 'replaceable value'"]


var letters = ['a', 'b', 'c', 'd'];
console.log(letters); // output: [ 'a', 'b', 'c', 'd' ]
console.log(letters[2]); // output: 'c' [element in index 2]


// After replacing 'g' in the position of 'c' [index no. 2]

letters[2] = 'g'; // Replace by 'g' in the position of 'c' (index 2 in the array).
console.log(letters); // output: [ 'a', 'b', 'g', 'd' ]

console.log(letters[2]); // output: 'g' [element in index 2]
console.log(letters.indexOf('g')); // output: 2 [index of 'g']
console.log(letters.indexOf('c')); // output: -1 [because it has no existence in the array]









// ==================================================
//                    MORE EXAMPLES
// ===================================================



// ***** Examples of Array: [know the index of any element]

// 1.

var bookPages = ['hablu', 'bolod', 'chouddogushthi', 'battery', 'paracetamol', 'gymnasium'];

console.log(bookPages.indexOf('paracetamol')); // output: 4

var paracetamolIndex = bookPages.indexOf('paracetamol');
console.log(paracetamolIndex); // output: 4


// 2.

var numbers = [45, 98, 65, 72, 52, 63];

console.log(numbers.indexOf(72)); // output: 3 [Index of 72]


var index = numbers.indexOf(72);
console.log(index); // output: 3 [Index of 72]

var index = numbers.indexOf(152);
console.log(index); // output: -1 [because it has no existence in the number array.]





// -----------------------------------------






// ***** know the element in any index of an array [Which element is in which index]


// 3.

var books = ['hablu', 'bolod', 'chouddogushthi', 'battery', 'paracetamol', 'gymnasium'];

console.log(books[2]); // output: chouddogushthi [element in index 2]


// 

var secondIndex = books[2]; // [second index but mainly it is positioned third]
console.log(secondIndex); // output: chouddogushthi [element in index 2]


var fifthIndex = books[5]; // [fifth index but mainly it is positioned sixth]
console.log(fifthIndex); // output: gymnasium [element in index 5]


var zeroIndex = books[0]; // [zero index but mainly it is positioned first]
console.log(zeroIndex); // output: hablu [element in index 0]


var firstIndex = books[1]; // [first index but mainly it is positioned second]
console.log(firstIndex); // output: bolod [element in index 1]


var nineteenthIndex = books[19]; // [nineteenth index but mainly it is positioned twentith]
console.log(nineteenthIndex); // output: undefined [because this index has no element / this index is not declared in array]






// --------------------------------------------------





// Replace the element by using index:


// ***** Declare variable and see the "index by element" and see the "element by index" ********


var num = [45, 98, 65, 72, 52, 63];
console.log(num); // output: [ 45, 98, 65, 72, 52, 63 ]
console.log(num.indexOf(98)); // output: 1 [index of 98]
console.log(num.indexOf(95)); // output: -1 [because it has no existence]
console.log(num[1]); // output: 98 [element of index 1]
console.log(num[4]); // output: 52 [element of index 4]


// after replacing 95 in the position of 98 [index no. 1]


num[1] = 95; // Replace by 95 in the position of 98 (index 1 in the array).
console.log(num); // output: [ 45, 95, 65, 72, 52, 63 ] ([after replace by 95])
console.log(num[1]); // output: 95 [element in index 1]
console.log(num.indexOf(95)); // output: 1 [index of 95]
console.log(num.indexOf(98)); // output: -1 [because it has no existence in the array]



// after replacing 21 in the position of 52 [index no. 4]


num[4] = 21; // Replace by 21 in the position of 52 (index 4 in the array).
console.log(num); // output: [ 45, 95, 65, 72, 21, 63 ] ([after replace by 21])
console.log(num[4]); // output: 21 [element in index 4]
console.log(num.indexOf(21)); // output: 4 [index of 21]
console.log(num.indexOf(52)); // output: -1 [because it has no existence in the array]





