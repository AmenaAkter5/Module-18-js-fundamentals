// ========================================
//              Conditionals
// ========================================


// We need to make decisions by comparing the conditions. We take one and elemenete another options. Here we do this by "if-else".


// if condition : true - main plan fulfillment is possible 
// if condition : false - main plan fulfillment is not possible.



// ***************************

// Formula:

if (condition) {
    // console.log(plan 'A')
}

// *****************************

/* 
first need to declare a variable and its value need to be in true or false.
*/

// 1.

var foodIsReady = true;

if (foodIsReady == true) {
    console.log('I will eat now!'); // output: show this result
}



foodIsReady = false;

if (foodIsReady == true) {
    console.log('I will eat now!'); // output is not shown
}


// 2.

iPhonePrice = 70000;
budget = 109500;


if (iPhonePrice < budget) {
    console.log('I will buy iPhone.'); // output: show this result
}


// Again,

var iPhonePrice = 70000;
var budget = 9500;

if (iPhonePrice < budget) {
    console.log('I will buy iPhone.'); // output is not shown
}


if (iPhonePrice > budget) {
    console.log('I do not want iPhone'); // output: show this result
}

// If these two conditions run at the same time then we will see the second condition's result because it is true.



// ====================================================



// We can write these type conditions in one place by "if-else"

/* 

This case has one condition, two plan.

If you have Alternative plans then you can write this type conditional format.


If condition : true - then Plan 'A' will be executed. ["if plan"]
If condition : false -  then plan 'B' will be executed. ["else plan"]

*/


// ***************************

// Formula:

if (condition) {
    // console.log(plan 'A')
}

else {
    // console.log(plan 'B')
}

// Condition-true: Plan 'A' will be executed. ["if plan"]
// Condition-false: plan 'B' will be executed. ["else plan"]

// * No need to write condition in 'else'

// ***************************************


// 1.

var chickenPrice = 180;
var money = 50;

if (chickenPrice < money) {
    console.log('Eat Chicken');
}

else {
    console.log('Eat potato Fry'); // output: show this result
}


// 2.

var chickenPrice = 180;
var money = 850;

if (chickenPrice < money) {
    console.log('Eat Chicken'); // output: show this result
}

else {
    console.log('Eat potato Fry');
}


// 3.

var job = true;

if (job == true) {
    console.log('Marry Me'); // output: show this result
}

else {
    console.log('Get Lost');
}

// 4.

var job = false;

if (job == true) {
    console.log('Marry Me');
}

else {
    console.log('Get Lost'); // output: show this result
}






//============================================
//                 Edition
//         video-9 [summary- 09:08]
//=============================================

// Conditional result in less than or equal.


// 5.

var eggPrice = 32;
var myBudget = 32;

if (eggPrice <= myBudget) {
    console.log('Buy egg'); // output: show this result
}


if (eggPrice >= myBudget) {
    console.log('Buy egg'); // output: show this result
}





