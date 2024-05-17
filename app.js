

/*
Logical condition
*&&
*||
*!
*/

/*
let a = 5;
let b = 30;
let c = 30;

if(a===b && b===c){
  console.log("it's ok ....");
}else{
    console.log("it's not ok...");
}

if(a===b || b===c){
   console.log("it's true");
}else{
    console.log("it's false");
}

if(a===b || !(b===c)){
    console.log("it's perfect");
 }else{
     console.log("it's not perfect");
 }

 if(!(a===b) || b===c){
    console.log("it's perfect");
 }else{
     console.log("it's not perfect");

 }
 if(!(a===b || b===c)){
    console.log("it's true");
 }else{
     console.log("it's false");
 }

*/

 /*
  * Usear Data collection
  */

/*
 let User = prompt("Enter a Number")
 
 Usear = Number(User)
 if(User%2 == 0){
    console.log("this is even numver");
 }else{
    console.log("this is odd number");
 }
 */

/*
 let number = prompt("Enter Your Number");

 if(number>=80 && number<=100){
    console.log("Grade 'A+' Point 4.00 First Class");
 };
 if(number>=75 && number<=79){
    console.log("Grade 'A' Point 3.75 First Class");
 };
 if(number>=70 && number<=74){
    console.log("Grade 'A-' Point 3.50 First Class");
 };
 if(number>=65 && number<=69){
    console.log("Grade 'B+' Point 3.25 First Class");
 };
 if(number>=60 && number<=64){
    console.log("Grade 'B' Point 3.00 First Class");
 };
 if(number>=55 && number<=59){
    console.log("Grade 'B-' Point 2.75 Second Class");
 };
 if(number>=50 && number<=54){
    console.log("Grade 'C+' Point 2.50 Second Class");
 };
 if(number>=45 && number<=49){
    console.log("Grade 'C' Point 2.25 Second Cladd");
 };
 if(number>=40 && number<=44){
    console.log("Grade 'D' Point 2.00 Third Class");
 }else{
   console.log("Faill");
 };
*/
 

/*
 //Function 

 function firstFunction(a,b){
   let first = a;
   let second = b;
   let c = first + second;
   console.log(c);
 }
 firstFunction(100,5000);
 firstFunction(14400,50);
 firstFunction(5000,100);

 // Call Back Function
 function firstName(){
   console.log("Write Your Full Name");
 }

 function nickName(){
   console.log("Write Your Nick Name");
 }

 nickName(firstName())
*/


 //Light project

 let on = document.querySelector(".on");
 let light = document.querySelector(".light");
 let off = document.querySelector(".off");

 on.addEventListener("click",function(){
   light.src = `https://www.w3schools.com/js/pic_bulbon.gif`;
 })

 off.addEventListener("click",function(){
   light.src = `https://www.w3schools.com/js/pic_bulboff.gif`;
 })


