//======================================
//           Array declaration
// ====================================== 



// 1. Which variable contains many elements that is called array. Elements can be number or string.

var tourspots = ['CoxBazar', 'Nepal', 'Vutan', 'Paris'];

// 2. The position of element is known as index. index is starting from 0.

console.log(tourspots.indexOf('Nepal')); // output: 1 [Index of element(Nepal)]

// 3. We can know the element by index number

var fourthSpot = tourspots[3];
console.log(fourthSpot); // output: Paris. [element of index 3]

// 4. We can replace the element of array by another element.

tourspots[1] = 'Srilanka';
console.log(tourspots); // output: [ 'CoxBazar', 'Srilanka', 'Vutan', 'Paris' ] (new item is added)


// 5. Add element in an array by using push [This element is added as the last element of an array]

tourspots.push('London');
console.log(tourspots); // output: [ 'CoxBazar', 'Srilanka', 'Vutan', 'Paris', 'London' ]


// 6. To Remove the last element of an array.

tourspots.pop();
console.log(tourspots);

// 7. We can check the total number of elements in an array.

console.log(tourspots.length); // output: 5








//======================================
//             Conditionals
// ====================================== 


if (tourspots[1] == 'Nepal') {
    console.log('Want to go to see Himaloy');
}

else if (tourspots[1] == 'China') {
    console.log('do not want to go');
}

else if (tourspots.length == 4) {
    console.log('Want to travel more country');
}
else {
    console.log('Do not go anywhere'); // output: show this result
}

// Sometimes don't need to declare else. There have no problem. 