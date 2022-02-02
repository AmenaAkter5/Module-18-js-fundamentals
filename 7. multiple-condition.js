// ================================================
//              Multiple - Conditionals
// ================================================

/*

Among multiple conditions we need to compare to find out the one decision and so for that we made comparison and select one.


Between two Conditions-

&& - Need to fulfill the both conditions. two or more conditions can be added by this operator.
|| - [Meaning - or] minimum one condition need to fulfill.

*/




// ==================================================
//         && - Need to fulfill all conditions
// ==================================================


// 1. Here need to fulfill both conditions, but here fulfill the one condition so main plan is not executed

var job = true;
var money = 150000;

if (job == true && money > 200000) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}

// or, 

var job = false;
var money = 250000;

if (job == true && money > 200000) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}


// 2. here fulfill two conditions so main plan is executed.

var job = true;
var money = 250000;

if (job == true && money > 200000) {
    console.log('Marry me'); // output: show this result
}

else {
    console.log('get lost');
}


// 3. two or more conditions can be added and all conditions need to be fulfilled to execute main plan.


var job = true;
var money = 250000;
var flat = true;

if (job == true && money > 200000 && flat == true) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}

// 4. if one condition is not fulfilled then main plan will not be executed.

job = true;
money = 250000;
flat = false;

if (job == true && money > 200000 && flat == true) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}





// ==================================================
//    || - Need to fulfill minimum one condition
// ==================================================



// 5. Minimum one condition need to be fulfilled to execute main plan.

job = true;
money = 150000;

if (job == true || money > 200000) {
    console.log('Marry me'); // output: show this result
}

else {
    console.log('get lost');
}

// 6.

job = false;
money = 150000;

if (job == true || money > 200000) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}

// 7.

job = true;
money = 50000;
flat = false;

if (job == true || money > 200000 || flat == true) {
    console.log('Marry me'); // output: show this result
}

else {
    console.log('get lost');
}

// 8.

job = false;
money = 50000;
flat = false;

if (job == true || money > 200000 || flat == true) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}






// ==================================================
//                 Complex Conditions
// ==================================================


// 9.

job = true;
money = 50000;
flat = true;

if ((job == true && money > 200000) || flat == true) {
    console.log('Marry me'); // output: show this result
}

else {
    console.log('get lost');
}

// 10. 

job = true;
money = 250000;
flat = false;

if ((job == true && money > 200000) || flat == true) {
    console.log('Marry me'); // output: show this result
}

else {
    console.log('get lost');
}

// 11.

job = false;
money = 250000;
flat = false;

if ((job == true && money > 200000) || flat == true) {
    console.log('Marry me');
}

else {
    console.log('get lost'); // output: show this result
}





