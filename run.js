// =====================================
//                 ARRAY
// ======================================


var family = ['father', 'mother', 'son', 'daughter'];

// console.log(family);


var studentMark = [80, 75, 50];

// console.log(studentMark);




// **** Array Length
// ======================


var familyMembers = family.length;

// console.log(familyMembers);





// **** Array Index by Element
//================================


var sonIndex = family.indexOf('son');

// console.log(sonIndex);


var sonInLawIndex = family.indexOf('son-in-law');

// console.log(sonInLawIndex);




//        Element by Index
// ============================


var thirdIndex = family[3];

// console.log(thirdIndex);




// Examples [Array and Array length]
// ==================================

var friendsAge = [11, 13, 17];
var muriChanachurFee = [34, 55, 221, 3];
var favouriteFruits = ['mango', 'litchi', 'jackfruit', 'grape', 'guava'];
var oddNumber = [1, 3, 5, 7, 9];
var vowels = ['a', 'e', 'i', 'o', 'u'];


// console.log(friendsAge);
// console.log(muriChanachurFee);
// console.log(favouriteFruits);
// console.log(oddNumber);
// console.log(vowels);


// console.log(friendsAge.length);
var friendsAgelength = friendsAge.length;
// console.log(friendsAgelength);


//console.log(muriChanachurFee.length);
var muriChanachurFeelength = muriChanachurFee.length;
// console.log(muriChanachurFeelength);


// console.log(favouriteFruits.length);
var favouriteFruitslength = favouriteFruits.length;
// console.log(favouriteFruitslength);


// console.log(oddNumber.length);
var oddNumberlength = oddNumber.length;
// console.log(oddNumberlength);


// console.log(vowels.length);
var vowelsCount = vowels.length;
// console.log(vowelsCount);




// Array- know index by element
// ==============================


var bookPages = ['hablu', 'bolod', 'chouddogushthi', 'battery', 'paracetamol', 'gymnasium'];

// console.log(bookPages.indexOf('paracetamol'));

var bookPagesIndex = bookPages.indexOf('paracetamol');
// console.log(bookPagesIndex);


var numbers = [45, 98, 65, 72, 52, 63];

// console.log(numbers.indexOf(72));


var index = numbers.indexOf(72);
// console.log(index);


var index = numbers.indexOf(152);
// console.log(index);





// element by Index
// ==================


var books = ['hablu', 'bolod', 'chouddogushthi', 'battery', 'paracetamol', 'gymnasium'];

// console.log(books[2]);

var secondIndex = books[2];
// console.log(secondIndex);


var fifthIndex = books[5];
// console.log(fifthIndex);


var zeroIndex = books[0];
// console.log(zeroIndex);


var firstIndex = books[1];
// console.log(firstIndex);


var nineteenthIndex = books[19];
// console.log(nineteenthIndex);





// Replace the element by using index:
// ====================================

var letters = ['a', 'b', 'c', 'd'];
// console.log(letters);
// console.log(letters[2]);

letters[2] = 'g';
// console.log(letters);
// console.log(letters[2]);
// console.log(letters.indexOf('g'));
// console.log(letters.indexOf('c'));



var num = [45, 98, 65, 72, 52, 63];
// console.log(num);
// console.log(num.indexOf(98));
// console.log(num.indexOf(95));
// console.log(num[1]);
// console.log(num[4]);


num[1] = 95;
// console.log(num);
// console.log(num[1]);
// console.log(num.indexOf(95));
// console.log(num.indexOf(98));


num[4] = 21;
// console.log(num);
// console.log(num[4]);
// console.log(num.indexOf(21));
// console.log(num.indexOf(52));




// =========
// Push-pop
//==========



// push- add elements to an array
//=================================

var lastBench = ['salam', 'balam', 'kalam'];
// console.log(lastBench);

lastBench.push('alam');
// console.log(lastBench);

lastBench.push('mobil', 'robin');
// console.log(lastBench);

var friendsAge = [11, 13, 17, 12];
// console.log(friendsAge);

friendsAge.push(15);
// console.log(friendsAge);





// pop- remove elements from an array
// ===================================

lastBench = ['salam', 'balam', 'kalam'];
// console.log(lastBench);

lastBench.pop();
// console.log(lastBench);

var lastStudent = lastBench.pop();
// console.log(lastStudent);


friendsAge = [11, 13, 17, 12];
// friendsAge.pop();
// console.log(friendsAge);

var lastItem = friendsAge.pop();
// console.log(lastItem);





// =============================
//           comparison
// =============================




// console.log(5 > 6);
// console.log(5 < 6);
// console.log(5 >= 6);
// console.log(5 <= 6);
// console.log(5 == 6);
// console.log(5 != 6);


// beween two variables

var myLove = 99;
var hisLove = 100;

// console.log(myLove > hisLove);
// console.log(myLove < hisLove);
// console.log(myLove == hisLove);
// console.log(myLove != hisLove);




// =================================
//            conditionals
// =================================

// 1.

var foodIsReady = true;

if (foodIsReady == true) {
    //    console.log('I will eat now!');
}


// 2. 

foodIsReady = false;

if (foodIsReady == true) {
    //  console.log('I will eat now!');
}


// 3. 

var iPhonePrice = 70000;
var budget = 9500;

if (iPhonePrice < budget) {
    // console.log('I will buy iPhone.');
}

if (iPhonePrice > budget) {
    // console.log('I do not want iPhone');
}


// 4. 

iPhonePrice = 70000;
budget = 109500;

if (iPhonePrice < budget) {
    // console.log('I will buy iPhone.'); // output is not shown
}


// 5.

var chickenPrice = 180;
var money = 50;

if (chickenPrice < money) {
    // console.log('Eat Chicken');
}

else {
    // console.log('Eat potato Fry');
}

// 6.

var chickenPrice = 180;
var money = 850;

if (chickenPrice < money) {
    // console.log('Eat Chicken');
}

else {
    // console.log('Eat potato Fry');
}

// 7.

var job = true;

if (job == true) {
    // console.log('Marry Me');
}

else {
    // console.log('Get Lost');
}

// 8.

var job = false;

if (job == true) {
    // console.log('Marry Me');
}

else {
    // console.log('Get Lost');
}

// 9.

var job = true;
var money = 150000;

if (job == true && money > 200000) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 10.

job = true;
money = 250000;

if (job == true && money > 200000) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 11. 

var job = false;
var money = 250000;

if (job == true && money > 200000) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 12. 

var job = true;
var money = 250000;
var flat = true;

if (job == true && money > 200000 && flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 13.

job = true;
money = 250000;
flat = false;

if (job == true && money > 200000 && flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 14.

job = true;
money = 150000;

if (job == true || money > 200000) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 15.

job = false;
money = 150000;

if (job == true || money > 200000) {
    console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 16.

job = true;
money = 50000;
flat = false;

if (job == true || money > 200000 || flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 17.

job = false;
money = 50000;
flat = false;

if (job == true || money > 200000 || flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 18.

job = true;
money = 50000;
flat = true;

if ((job == true && money > 200000) || flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 19.

job = true;
money = 250000;
flat = false;

if ((job == true && money > 200000) || flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 20.

job = false;
money = 250000;
flat = false;

if ((job == true && money > 200000) || flat == true) {
    // console.log('Marry me');
}

else {
    // console.log('get lost');
}

// 21. If budget is 100

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 100;

if (danish < budget) {
    // console.log('Buy Danish');
}

else if (bread < budget) {
    // console.log('Buy Bread');
}

else if (toast < budget) {
    // console.log('Buy Toast');
}

else {
    // console.log('Buy Nothing');
}

// 22. If budget is 40

danish = 50;
bread = 25;
toast = 10;
budget = 40;

if (danish < budget) {
    // console.log('Buy Danish');
}

else if (bread < budget) {
    // console.log('Buy Bread');
}

else if (toast < budget) {
    // console.log('Buy Toast');
}

else {
    // console.log('Buy Nothing');
}


// 23. If budget is 20

danish = 50;
bread = 25;
toast = 10;
budget = 20;

if (danish < budget) {
    // console.log('Buy Danish');
}

else if (bread < budget) {
    // console.log('Buy Bread');
}

else if (toast < budget) {
    // console.log('Buy Toast');
}

else {
    // console.log('Buy Nothing');
}


// 24. If budget is 7

danish = 50;
bread = 25;
toast = 10;
budget = 7;

if (danish < budget) {
    // console.log('Buy Danish');
}

else if (bread < budget) {
    // console.log('Buy Bread');
}

else if (toast < budget) {
    // console.log('Buy Toast');
}

else {
    // console.log('Buy Nothing');
}

// 25.

var danish = 50;
var bread = 25;
var toast = 10;
var budget = 100;
var packedwell = false;

if (danish < budget) {
    if (packedwell == true) {
        // console.log('Buy Danish');
    }
    else {
        // console.log('Do not buy danish.')
    }
}

else {
    // console.log('Buy Nothing');
}


// 26.

var tourspots = ['CoxBazar', 'Nepal', 'Vutan', 'Paris'];
// console.log(tourspots.indexOf('Nepal'));

var fourthSpot = tourspots[3];
// console.log(fourthSpot);

tourspots[1] = 'Srilanka';
// console.log(tourspots);

tourspots.push('London');
// console.log(tourspots);
// console.log(tourspots.length);


if (tourspots[1] == 'Nepal') {
    // console.log('Want to go to see Himaloy');
}

else if (tourspots[1] == 'China') {
    // console.log('do not want to go');
}

else if (tourspots.length == 4) {
    // console.log('Want to travel more country');
}
else {
    // console.log('Do not go anywhere');
}


// 27.

var eggPrice = 32;
var myBudget = 32;

if (eggPrice <= myBudget) {
    // console.log('Buy egg');
}

if (eggPrice >= myBudget) {
    // console.log('Buy egg');
}





// =============================================
//               Practice - Conditions
// ==============================================

// 1.

// 1.

var rickshawFee = 30;

if (rickshawFee < 30) {
    // console.log('Going by Rickshaw');
}

else {
    // console.log('Walking');
}


// or,

if (rickshawFee <= 30) {
    // console.log('Going by Rickshaw');
}

else {
    // console.log('Walking');
}


// 2.

var rice = 50;

if (rice < 50) {
    // console.log('Eat Rice');
}

else {
    // console.log('Eat Bread');
}

// or,

var rice = 50;

if (rice <= 50) {
    // console.log('Eat Rice');
}

else {
    // console.log('Eat Bread');
}


// 3.

var salary = 35000;

if (salary > 30000) {
    // console.log('Do the Job');
}

else {
    // console.log('Do not care about that');
}

// 4.

var age = 18;

if (age >= 18) {
    // console.log('Get ID Card');
}

else {
    // console.log('Non Valid age to get ID Card')
}

// or,

age = 17;

if (age >= 18) {
    // console.log('Get ID Card');
}

else {
    // console.log('Non Valid age to get ID Card')
}


// or,

age = 20;

if (age >= 18) {
    // console.log('Get ID Card');
}

else {
    // console.log('Non Valid age to get ID Card')
}

// 5.

var tutionFee = 6500;
var femaleStudent = true;

if (tutionFee > 6000 && femaleStudent == true) {
    // console.log('Do the tution');
}

else {
    // console.log('Nothing to do');
}

// or,

tutionFee = 5000;
femaleStudent = true;

if (tutionFee > 6000 && femaleStudent == true) {
    // console.log('Do the tution');
}

else {
    // console.log('Nothing to do');
}


// or,

tutionFee = 7000;
femaleStudent = false;

if (tutionFee > 6000 && femaleStudent == true) {
    // console.log('Do the tution');
}

else {
    // console.log('Nothing to do');
}

// 6.

tutionFee = 5000;
femaleStudent = true;

if (tutionFee > 6000 || femaleStudent == true) {
    // console.log('Do the tution');
}

else {
    // console.log('Nothing to do');
}


// 7.

var biriani = 100;
var khichuri = 120;

if (biriani < khichuri) {
    // console.log('Eat Biriani');
}

else {
    // console.log('Eat Khichuri');
}


// 8.

var ticket = 115;

if (ticket < 100) {
    // console.log('See the match in stadium');
}

// or,

var ticket = 95;

if (ticket < 100) {
    // console.log('See the match in stadium');
}


// 9.

var coffeePrice = 100;

if (coffeePrice < 100) {
    // console.log('Eat Coffee');
}

else {
    // console.log('Eat tea');
}


// 10.

var budget = 5000;

if (budget >= 5000) {
    // console.log('Visit CoxsBazar');
}

else {
    // console.log('Go Ashulia to remove sorrow in river water');
}


// 11.

var iceCreamPrice = 50;
var isHot = true;

if (iceCreamPrice < 50 && isHot == true) {
    // console.log('Eat Ice Cream');
}

else {
    // console.log('Drink Filtered Water');
}




// =============================================
//               Practice - Array
// ==============================================


// 1.

var friends = ['olil', 'kholil', 'molil', 'jolil'];
// console.log(friends);

// 2.

// console.log(friends.length);

var friendNumber = friends.length;
// console.log(friendNumber);


// 3.

friends.push('dolly');
// console.log(friends);


// 4.

friends.pop();
// console.log(friends);


// 5.

// console.log(friends.indexOf('molil'));
var molilIndex = friends.indexOf('molil');
// console.log(molilIndex);



// console.log(friends.indexOf('dolly'));
var dollyIndex = friends.indexOf('dolly');
// console.log(dollyIndex);


// 6.

// console.log(friends[1]);
var secondFriend = friends[1];
// console.log(secondFriend);


// 7.

friends[2] = 'koly';
// console.log(friends);





//===============================
//          New Things
//===============================

// 8.

friends = ['olil', 'kholil', 'molil', 'jolil'];

// console.log(friends.reverse());

var reverseLine = friends.reverse();
// console.log(reverseLine);


// 9.

var friendsAge = [16, 14, 15, 17, 14, 13, 15];

// console.log(friendsAge.sort());

var sortingFriendsAge = friendsAge.sort();
// console.log(sortingFriendsAge);

// =================================================
// ==================================================


// 10.

var furnitures = ['table', 'chair', 'bed', 'almirah'];
// console.log(furnitures);


// 11.

var family = ['Father', 'Mother', 'Son', 'Daughter', 'Daughter-in-law', 'Elder Baby - Zarin Subah', 'Younger Baby - Abrar Fahad', 'Youngest Son Yeasin']
// console.log(family);


// 12.

// console.log(family.length)
var familyMembers = family.length;
// console.log(familyMembers);


// console.log(family[2]);
var thirdMember = family[2];
// console.log(thirdMember);


// 13.

family.push('kolly');
// console.log(family);

// console.log(family.length)

var familyMembers = family.length;
// console.log(familyMembers);







// ==================================================
//           Module Practice Challenge
// ==================================================


// 1.


// Alia Grade- Alia got 95 [grade: A+]
// Dalia's Grade- Dlia got 66 [grade: C]
// Salia's Grade- Salia got 80 [grade: A]
// Malia's Grade- Malia got 59 [grade: D]
// Lilia's Grade- Lilia got 47 [grade: F]
// Jalia's Grade- Jalia got 77 [grade: B]


var marks = 77;

if (marks >= 50 && marks < 60) {
    // console.log('grade: D');
}

else if (marks >= 60 && marks < 70) {
    // console.log('grade: C');
}

else if (marks >= 70 && marks < 80) {
    // console.log('grade: B');
}

else if (marks >= 80 && marks < 90) {
    // console.log('grade: A');
}

else if (marks >= 90) {
    // console.log('grade: A+');
}

else {
    // console.log('grade: F');
}



// 2.

// Signal - red [Stop]
// Signal - yellow [Wait]
// Signal - green [Continue]


var signal = 'green';

if (signal == 'red') {
    // console.log('Do not cross the road');
}
else if (signal == 'yellow') {
    // console.log('You Need to wait until the signal is green');
}
else {
    // console.log('You may cross the road safely');
}







// ================================
//         Extra [Comparison]
// =================================


var myLove = 99;
var hisLove = 100;


// console.log(myLove <= hisLove);
// console.log(myLove >= hisLove);







// ================================
//            Extra [Loop]
// =================================

// 28.

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
// console.log(count)


// 29.

let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);


