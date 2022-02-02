// ================================================
//              Multi staged Conditionals
// ================================================


// Here conditions have ladders. where the condition get fullfillment that plan will be executed.

// We write the nested conditions by "else if" keyword.


// 1. If budget is 100.

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 100;

if (danish < budget) {
    console.log('Buy Danish'); // output: show this result
}

else if (bread < budget) {
    console.log('Buy Bread');
}

else if (toast < budget) {
    console.log('Buy Toast');
}

else {
    console.log('Buy Nothing');
}


// 2. If budget is 40.

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 40;

if (danish < budget) {
    console.log('Buy Danish');
}

else if (bread < budget) {
    console.log('Buy Bread'); // output: show this result
}

else if (toast < budget) {
    console.log('Buy Toast');
}

else {
    console.log('Buy Nothing');
}


// 3. If budget is 20.

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 20;

if (danish < budget) {
    console.log('Buy Danish');
}

else if (bread < budget) {
    console.log('Buy Bread');
}

else if (toast < budget) {
    console.log('Buy Toast'); // output: show this result
}

else {
    console.log('Buy Nothing');
}


// 4. If budget is 7.

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 7;

if (danish < budget) {
    console.log('Buy Danish');
}

else if (bread < budget) {
    console.log('Buy Bread');
}

else if (toast < budget) {
    console.log('Buy Toast');
}

else {
    console.log('Buy Nothing'); // output: show this result
}







// ================================================
//              Nested Conditions
// ================================================

// We can write another condition in one condition


// 5.

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 100;
var packedwell = false;

if (danish < budget) {
    if (packedwell == true) {
        console.log('Buy Danish');
    }
    else {
        console.log('Do not buy danish.') // output: show this result
    }
}

else {
    console.log('Buy Nothing');
}




