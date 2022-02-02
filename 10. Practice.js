// ======================================
//                CONDITIONS
// =======================================


// 1.

var rickshawFee = 30;

if (rickshawFee < 30) {
    console.log('Going by Rickshaw');
}

else {
    console.log('Walking'); // output: show this result
}


// or,

if (rickshawFee <= 30) {
    console.log('Going by Rickshaw'); // output: show this result
}

else {
    console.log('Walking');
}

// 2.

var rice = 50;

if (rice < 50) {
    console.log('Eat Rice');
}

else {
    console.log('Eat Bread'); // output: show this result
}

// or,

var rice = 50;

if (rice <= 50) {
    console.log('Eat Rice'); // output: show this result
}

else {
    console.log('Eat Bread');
}


// 3.

var salary = 35000;

if (salary > 30000) {
    console.log('Do the Job'); // output: show this result
}

else {
    console.log('Do not care about that');
}


// 4.

var age = 18;

if (age >= 18) {
    console.log('Get ID Card'); // output: show this result
}

else {
    console.log('Non Valid age to get ID Card')
}

// or,

age = 17;

if (age >= 18) {
    console.log('Get ID Card');
}

else {
    console.log('Non Valid age to get ID Card') // output: show this result
}


// or,

age = 20;

if (age >= 18) {
    console.log('Get ID Card'); // output: show this result
}

else {
    console.log('Non Valid age to get ID Card')
}

// 5.

var tutionFee = 6500;
var femaleStudent = true;

if (tutionFee > 6000 && femaleStudent == true) {
    console.log('Do the tution'); // output: show this result
}

else {
    console.log('Nothing to do');
}


// or,

tutionFee = 5000;
femaleStudent = true;

if (tutionFee > 6000 && femaleStudent == true) {
    console.log('Do the tution');
}

else {
    console.log('Nothing to do'); // output: show this result
}


// or,

tutionFee = 7000;
femaleStudent = false;

if (tutionFee > 6000 && femaleStudent == true) {
    console.log('Do the tution');
}

else {
    console.log('Nothing to do'); // output: show this result
}

// 6.

tutionFee = 5000;
femaleStudent = true;

if (tutionFee > 6000 || femaleStudent == true) {
    console.log('Do the tution'); // output: show this result
}

else {
    console.log('Nothing to do');
}

// 7.

var biriani = 100;
var khichuri = 120;

if (biriani < khichuri) {
    console.log('Eat Biriani'); // output: show this result
}

else {
    console.log('Eat Khichuri');
}

// 8.

var ticket = 115;

if (ticket < 100) {
    console.log('See the match in stadium');
}

// output: Don't show the result


// or,

var ticket = 95;

if (ticket < 100) {
    console.log('See the match in stadium'); // output: show this result
}


// 9.

// ৫.১: “কফির দাম” (coffeePrice) নামে একটা ভেরিয়েবল লিখ এবং কফির দাম যদি 100 টাকা এর কম হলে কফি খাবো না হলে চা খাবো এমন একটা প্রোগ্রাম লিখ। 


var coffeePrice = 100;

if (coffeePrice < 100) {
    console.log('Eat Coffee');
}

else {
    console.log('Eat tea'); // output: show this result
}


// 10.

// ৫.২: পকেটে 5000 টাকার বেশি বা সমান থাকলে কক্সবাজার যাবো আর না হলে আশুলিয়ায় যাবো সেরকম একটা প্রোগ্রাম লিখ।

var budget = 5000;

if (budget >= 5000) {
    console.log('Visit CoxsBazar'); // output: show this result
}

else {
    console.log('Go Ashulia to remove sorrow in river water');
}


// 11.

// ৫.৩:আইসক্রিমের দাম (iceCreamPrice) 50 টাকার কম হলে এবং গরম লাগলে (isHot) আইসক্রিম খাবো, নচেৎ ফিল্টারড পানি খাবো, এমন একটা প্রোগ্রাম লিখ। 


var iceCreamPrice = 50;
var isHot = true;

if (iceCreamPrice < 50 && isHot == true) {
    console.log('Eat Ice Cream');
}

else {
    console.log('Drink Filtered Water'); // output: show this result
}








// ======================================
//                Array
// =======================================

// 1.

var friends = ['olil', 'kholil', 'molil', 'jolil'];
console.log(friends); // output: [ 'olil', 'kholil', 'molil', 'jolil' ]

// 2.

console.log(friends.length);

var friendNumber = friends.length;
console.log(friendNumber); // output: 4


// 3.

friends.push('dolly');
console.log(friends); // output: [ 'olil', 'kholil', 'molil', 'jolil', 'dolly' ]


// 4.

friends.pop();
console.log(friends); // output: [ 'olil', 'kholil', 'molil', 'jolil' ]


// 5.

console.log(friends.indexOf('molil')); // output: 2 [Index of 'molil']

var molilIndex = friends.indexOf('molil');
console.log(molilIndex); // output: 2 [Index of 'molil']




console.log(friends.indexOf('dolly')); // output: -1 [It has no existence in Array so the result is -1.]

var dollyIndex = friends.indexOf('dolly');
console.log(dollyIndex); // output: -1 [It has no existence in Array so the result is -1.]


// 6.

console.log(friends[1]); // output: kholil [kholil in index 1]

var secondFriend = friends[1];
console.log(secondFriend); // output: kholil [kholil in index 1]

// 7.

friends[2] = 'koly'; // koly is the new member in index 2
console.log(friends); // output: [ 'olil', 'kholil', 'koly', 'jolil' ]





//      New Things
//=====================

// 8.

friends = ['olil', 'kholil', 'molil', 'jolil'];

console.log(friends.reverse()); // output: [ 'jolil', 'molil', 'kholil', 'olil' ]

var reverseLine = friends.reverse();
console.log(reverseLine);


// 9.

var friendsAge = [16, 14, 15, 17, 14, 13, 15];

console.log(friendsAge.sort()); // output: [ 13, 14, 14, 15, 15, 16, 17  ]

var sortingFriendsAge = friendsAge.sort();
console.log(sortingFriendsAge); // output: [ 13, 14, 14, 15, 15, 16, 17  ]

// ================================================


// 10.

/* ৬.১:এমন একটা জিনিসের নাম লেখ, যেটার ভিতরে একই রকমের অনেকগুলো 
জিনিস থাকে। একই রকমের অনেকগুলো জিনিসের সমষ্টি হলে, সেটা একটা array 
হবে।  */


var furnitures = ['table', 'chair', 'bed', 'almirah'];
console.log(furnitures); // output: [ 'table', 'chair', 'bed', 'almirah' ]


// 11.

/* ৬.২: তোর পরিবারের সব সদস্যদের নাম নিয়ে একটা array ডিক্লেয়ার কর। এই array এর নাম দিবি family । */

var family = ['Father', 'Mother', 'Son', 'Daughter', 'Daughter-in-law', 'Elder Baby - Zarin Subah', 'Younger Baby - Abrar Fahad', 'Youngest Son Yeasin']
console.log(family);


// 12.

/* ৬.৩:তোর পরিবারের array তে কয়জন সদস্য আছে সেটা বের কর। 
সেই array এর দ্বিতীয় পজিশনে কে আছে সেটাও বের কর। */


console.log(family.length) // output: 8

var familyMembers = family.length;
console.log(familyMembers); // output: 8




console.log(family[2]); // output: son

var thirdMember = family[2];
console.log(thirdMember); // output: son


// 13. 

/* ৬.৪: ধর, তুই কলিকে বিয়ে করে ফেলছিস। এখন কলিকে তোর পরিবারের 
সদস্যদের array তে যোগ কর।  */


family.push('kolly');
console.log(family);

/* output: [
    'Father',
    'Mother',
    'Son',
    'Daughter',
    'Daughter-in-law',
    'Elder Baby - Zarin Subah',
    'Younger Baby - Abrar Fahad',
    'Youngest Son Yeasin',
    'kolly'
  ] */

console.log(family.length) // output: 9

var familyMembers = family.length;
console.log(familyMembers); // output: 9








// ==================================================
//           Module Practice Challenge
// ==================================================


// 1.

/* প্রাকটিস চ্যালেঞ্জ -১:  

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছো। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো.আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে ?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A +. */




// Alia's Grade- Alia got 95 [grade: A+]

var marks = 95;

if (marks >= 50 && marks < 60) {
    console.log('grade: D');
}

else if (marks >= 60 && marks < 70) {
    console.log('grade: C');
}

else if (marks >= 70 && marks < 80) {
    console.log('grade: B');
}

else if (marks >= 80 && marks < 90) {
    console.log('grade: A');
}
else if (marks >= 90) {
    console.log('grade: A+'); // output: show this result
}

else {
    console.log('grade: F');
}


// Dalia's Grade- Dlia got 66 [grade: C]

var marks = 66;

if (marks >= 50 && marks < 60) {
    console.log('grade: D');
}

else if (marks >= 60 && marks < 70) {
    console.log('grade: C'); // output: show this result
}

else if (marks >= 70 && marks < 80) {
    console.log('grade: B');
}

else if (marks >= 80 && marks < 90) {
    console.log('grade: A');
}
else if (marks >= 90) {
    console.log('grade: A+');
}

else {
    console.log('grade: F');
}


// Salia's Grade- Salia got 80 [grade: A]

var marks = 66;

if (marks >= 50 && marks < 60) {
    console.log('grade: D');
}

else if (marks >= 60 && marks < 70) {
    console.log('grade: C');
}

else if (marks >= 70 && marks < 80) {
    console.log('grade: B');
}

else if (marks >= 80 && marks < 90) {
    console.log('grade: A'); // output: show this result
}
else if (marks >= 90) {
    console.log('grade: A+');
}

else {
    console.log('grade: F');
}


// Malia's Grade- Malia got 59 [grade: D]

var marks = 66;

if (marks >= 50 && marks < 60) {
    console.log('grade: D'); // output: show this result
}

else if (marks >= 60 && marks < 70) {
    console.log('grade: C');
}

else if (marks >= 70 && marks < 80) {
    console.log('grade: B');
}

else if (marks >= 80 && marks < 90) {
    console.log('grade: A');
}
else if (marks >= 90) {
    console.log('grade: A+');
}

else {
    console.log('grade: F');
}



// Lilia's Grade- Lilia got 47 [grade: F]

var marks = 66;

if (marks >= 50 && marks < 60) {
    console.log('grade: D');
}

else if (marks >= 60 && marks < 70) {
    console.log('grade: C');
}

else if (marks >= 70 && marks < 80) {
    console.log('grade: B');
}

else if (marks >= 80 && marks < 90) {
    console.log('grade: A');
}
else if (marks >= 90) {
    console.log('grade: A+');
}

else {
    console.log('grade: F'); // output: show this result
}



// Jalia's Grade- Jalia got 77 [grade: B]

var marks = 66;

if (marks >= 50 && marks < 60) {
    console.log('grade: D');
}

else if (marks >= 60 && marks < 70) {
    console.log('grade: C');
}

else if (marks >= 70 && marks < 80) {
    console.log('grade: B'); // output: show this result
}

else if (marks >= 80 && marks < 90) {
    console.log('grade: A');
}
else if (marks >= 90) {
    console.log('grade: A+');
}

else {
    console.log('grade: F');
}




// 2.

/* প্রাকটিস প্রব্লেম-২: 

তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। 
সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।  */


// Signal - red [Stop]

var signal = 'red';

if (signal == 'red') {
    console.log('Do not cross the road'); // output: show this result
}
else if (signal == 'yellow') {
    console.log('You Need to wait until the signal is green');
}
else {
    console.log('You may cross the road safely');
}


// Signal - yellow [Wait]


var signal = 'yellow';

if (signal == 'red') {
    console.log('Do not cross the road');
}
else if (signal == 'yellow') {
    console.log('You Need to wait until the signal is green'); // output: show this result
}
else {
    console.log('You may cross the road safely');
}


// Signal - green [Continue]


var signal = 'red';

if (signal == 'red') {
    console.log('Do not cross the road');
}
else if (signal == 'yellow') {
    console.log('You Need to wait until the signal is green');
}
else {
    console.log('You may cross the road safely'); // output: show this result
}




