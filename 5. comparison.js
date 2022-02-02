// ===================================
//              Comparison
// ===================================


/* -----------------------------------------------------

We need to know the comparison for conditionals.


***** We can compare with one thing in "six" ways. They are the condition checkers ---->>


>, <, ==, !=, <=, >=

----------------------------------------------------------- 


> এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে বড় কিনা

< এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে ছোট কিনা  

== এইটা দিয়ে চেক করবে বাম পাশেরটা আর ডানপাশেরটা দুইটাই সমান কিনা

!= এইটা দিয়ে চেক করবে বাম পাশেরটা আর ডানপাশেরটা দুইটাই অসমান (ডিফারেন্ট বা আলাদা) কিনা

<= এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে ছোট বা সমান কিনা 

>= এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে বড় বা সমান কিনা 


এই ছয়টা জিনিস বুঝতে পারলে তোমার কন্ডিশন এর অলমোস্ট অর্ধেক কাজ শেষ। এর পর আসবে আরো দুইটা স্পেশাল জিনিস 


*/

console.log(5 > 6); // output: false
console.log(5 < 6); // output: true
console.log(5 == 6); // output: false
console.log(5 != 6); // output: true
console.log(5 >= 6); // output: false
console.log(5 <= 6); // output: true



// We can make comparison between two variables.


var myLove = 99;
var hisLove = 100;

console.log(myLove > hisLove); // output: false
console.log(myLove < hisLove); // output: true
console.log(myLove == hisLove); // output: false
console.log(myLove != hisLove); // output: true
console.log(myLove <= hisLove); // output: true
console.log(myLove != hisLove); // output: false


/*



// =====================================
//              Conditions
// =====================================


-------------------------------------------------------------

Between two Conditions-

&& - Need to fulfill the both condition
|| - [Meaning - or] minimum one condition need to fulfill.

---------------------------------------------------------------



দুইটা শর্তের মাঝখানে:

&& থাকার মানে দুইটা শর্তই পূরণ করতে হবে। একটা করবে আরেকটা করবে না। তাহলে হবে না। 

।। থাকার মানে দুইটা শর্তেরযেকোন একটা পূরণ করলেই হবে। তবে দুইটাই না করলে হবে না। 

*/


// && - Need to fulfill the both condition to be a partner.

console.log(studyGood && goodPerson);


// || - [or] minimum one condition need to fulfill to be an elegible.

console.log(isBanker || goodResult);




// [Expanded version will discuss in next Video.]




