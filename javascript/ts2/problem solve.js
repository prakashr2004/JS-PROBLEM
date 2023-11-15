// "use strict"


// ---------Age to Days----------------------------
function age(years){
    let days = years * 365;
    return days
}
var days = age(65)
console.log(days)

// ------------------lessthan 100---------------------------------------
 var a = 50;
  result = (a > 100) ? "true":"false"
  console.log(result)


var  num1 = 22
var num2 = 15
var num = num1+num2
result = ( num < 100) ? "true":"false" 
console.log(result)
// -----------------------Hourse to Second-------------------------------------------------

function time(a){
  c = a * 60
  return c * 60
}
let seconds = time(2)
console.log(seconds)
// --------------polygon angles----------------------------------------
function angle(n){
  a = (n-2)*180;
  return a
}
let value = angle(3)
console.log(value)
// --------------Retrun------------------------------------------
function add(a)
{
return "something "+ a
}
let addleter = add("is better than nothing")
console.log(addleter)
// --------------------lessthan or euqal to zero--------------------------------------------------------

function sum2(n){
  c = n == 0
  return c
}

 var compare = sum2(-2)
 console.log("less than zero : "+compare)


// ------------------------&&operator---------------------------


function myfunction(a,b){
  c = a && b
  return c
}
var check = myfunction(true,true)
console.log(check)


// -------------------the form problem-----------------

function animal(a,b,c){
   chickenlegs = a * 2;
   cowlegs= b * 4;
   plgslegs = c * 4;
    animalsleg = chickenlegs + cowlegs + plgslegs
   return animalsleg
}
let legs = animal(2,3,5)
console.log(legs)

// -------------------Equlity chcek----------------------------------------------------------------------------

function sum(a,b){
  console.log(a === b)
}
sum(1,1)

// ----------------------------fix the exprestion--------------------------------------------------------------


function cal(x){
 
 if ( x===7){
  console.log("true")
 }
  else{
     console.log("false")
 }
}
cal(7)