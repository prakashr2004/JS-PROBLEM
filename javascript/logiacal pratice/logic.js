
//   --------------------------------------------------------

var myarr = [1,2,45,"56","67"]
console.log(Number.isInteger(56))

function myFunction(myarr){
    var sum = 0
    for(i=0;  i<myarr.length;i++){
        if(Number.isInteger(myarr[i])===true){
             sum+=myarr[i]
             
        }
       
}
     return sum 
}
  var total = myFunction(myarr)
  console.log(total)


// ----------------Vowel Count---------------------------

var str = " iprakash"
function vowelCount(s){
    var count = s.match(/[aeiou]/gi)
    if(count===null){
        return(0)
    }
    else{
        return(count.length)
    }

}
var Count = vowelCount(str)
console.log(Count)

// ----------------------------------------------------
// ---------------------ARRAY  POSTIVE & NEGATIVE COUNT------------------------------------------------------------------

// function count(arr){ 
//     var postive = 0var arr =var arr = myArr[0]var arr = myArr[0]var arr = myArr[0]var arr = myArr[0] myArr[0]
//     var negative = 0
//     for(i=0; i <=arr.length;i++){
//         if(arr[i] > 0){
//           postive ++
//         }var arr = myArr[0]var arr = myArr[0]var avar arr = myArr[0]rr = myArr[0]
//         else if(arr[i] < 0) 
//         {
//             negative += arr[i]
//         }
//     }
//     console.log("POSTIVE COUNT : "+postive)
//     console.log("NEGATIVE SUM :"+negative)
// }

// var total = count([1,3,88,4,9,-9,-8,-5])
// console.log(total);

// -----------------------------MULTIPE OF ARRAY ----------------------------------------------------

// function multipleArr(len,mul){
//     var arr = []
//    for(i=1;i<=len;i++){
//    sum = i*mul
//    arr.push(sum)
//    }
//    console.log(arr)var arr = myArr[0]
// }

// var multiple = multipleArr(7,8)
// console.log(multiple)

// ------------------ARRAY REVERSE-----------------------
// var myarr = [1,2,3,4,5,6]
// var reverse = []
// for(i=myarr.length-1;i>=0;i--){
//    reverse[myarr.length-1-i]=myarr[i]
//    console.log(reverse)
// }

// ------------OTHER METHOD--------------
// var myarr =[1,2,3,4,5,6,7]
// var count = 0;
// var emarr = []
// for(i=myarr.length-1;i>=0;i--){
//    emarr[count++]=myarr[i]
   
// }
// console.log(emarr)

// ------------DUPLICATE ARRAY-----------------------------

// let arr=[1,2,3,3,4,4,5,3,"prakash",true];
// console.log(arr.indexOf(8));
// let arr1=[];
// for(let i=0;i<arr.length;i++){

//     if( arr1.indexOf(arr[i]) === -1){

//         arr1[i]=arr[i];
//     }
// }
// console.log(arr1);
// var c =arr1.filter(Number)
// console.log(c);

// ----------------------MAX AND MIN ARRAY---------------------------------------
// var arr = [23,4,53,6,7,8]
// var max = [0]
// for(i=0;i<arr.length;i++){

//  if(arr[i]>max){
//     max = arr[i]
//   }
// }
// console.log(max)


// ------------------------LEARNING PROPLEM-------------------------

// ----------------PRINT THE EVENT NNUMBER----------------------------------

// for(i=0;i<=10;i+=2){
//   console.log(i)
// }

// --------------------culculate TABLE --------------------------------

// for(i=1;i<=10;i++){
//   var mul = i*12
// console.log(i+"*"+"12"+"="+mul)
// }

// -----------------------LENTH CONVETER FUNCTION---------------------------------------------------

// function mileConvert(kilometer){
//   return kilometer *  0.621371 
// }
// console.log(mileConvert(5))

// -----------------------REVERSE ARRAY----------------------------------------
// var arr = [1,2,3,4,5,6,7]
// var myArr = []
// var count = 0
// for(i=arr.length-1;i>=0;i--){
//   myArr[count++]= arr[i]
 
// }
// console.log(myArr)

// -------------------------FILTER NEGATIVE NUMBER----------------------------------------

// function negativeFilter(myarr){
// for(i=0;i<myarr.length;i++){

// console.log(myarr[[i]])

// }
// }
// var arr = [1,2,-33,-44,-55,33]
// console.log(negativeFilter(arr))



// -------------------REMOVE THE SPACE AROUNT-----------------------------

// var user =prompt("Enter The Data")
// var trim = user.trim()
// console.log(trim)


// ---------------DIVISEBLE 10---------------------------------

// function myFunction(num){
//   if(num%10==0){
//   return("true")
//   }
//   else{
//     return("false")
//   }
// }
// var check = myFunction(10)
// console.log(check)

// ---------------------VOWEL COUNT ------------------------------------------------


// function vowelCount(Vowel){
// var c = Vowel.match(/[aeiou]/gi)
// if(c===null){
//   return 0
// }
// else{
//   return c.length
// }
// }
// var str = vowelCount("prakash")
// console.log(str)

// ---------------------SECOND LARGEST NUMBER-------------------------
var arr = [67,34,4677,87,566,34]
for(i=0;i<=arr.length-1;i++){
  for(j=i+1;j<=arr.length-1;j++){
    if(arr[i]> arr[j]){
      temp = arr[i]
      arr[i] = arr[j]
      arr[j]=temp
    }
  }
}
console.log(arr[arr.length-3])

// -----------------------------SHORT THIS ARRAY -------------------------------------


// -----------------------HIGHEST VALUE ----------------------------------------------------

var array = [45,3,4,22,33,2]
var myArr = [0]
var sumal = [0]
for(i=0;i<array.length;i++){
  if(array[i]>myArr){
    myArr = array[i]
  }
}
console.log("ARRAY BIGGEST VALUE"+" :"+myArr)


// -----------LOWEST VALUE-----------------------------

// for(i=0;i<=array.length;i++){
//   if(sumal[0] < array[i]){
//     sumal = array[i]
//   }
// }
// console.log("ARRAY SUMALLIST VALLUE"+"  :"+sumal)

// var p =""
// for(i=0;i<=5;i++){
//     for(j=0;j<i;j++){
//         p +="*"
//     }
//     p+="\n"
// }
// console.log(p)



// function myFunction(str){
//     var reverse = ""
// for(i=str.length-1;i>=0;i--){
//     reverse += str[i]
// }
// if(reverse === str){
//        return "palindrom"
// }
// else{
//         return "Not Polyndrom"
// }
// }
// var c = myFunction("Eswari Prakash")
// console.log(c)




// function myFunction(x,y){
//     var count = 0
//     for(i=0;i<y.length;i++){
//         if(y.charAt(i) == x){
//             count++
//         }
//     }
//    return count
  
// }

// var c = myFunction("a","apple arum")
// console.log(c)


// function myFunction(num){
//     if(num/10 == 0){
//         return  "true"
//     }
//     else{
//         return "false"
//     }
// }
// console.log(myFunction(6))

var c = "abcdef"
for(i=0;i<=c.length;i++){
var p = ""
var v = ""
 if(i%2==0){
    p+=c[i]
 }
 else{
    v+=c[i]
 }
console.log(v.concat(p))



var b = prompt("Enter the number")
var sum = 0;
var temp;
var x = b;
while(x>0){
    temp = x%10
    sum =sum+ temp*temp*temp
    x = parseInt(x/10)
}
alert(sum)



let e, x, d = 0;
let b = prompt("Enter a number");
x=b;

while (x > 0) {
  e = x % 10;
  x = parseInt(x/10);
  d = d + (e*e*e);
}
alert(d)




var num = 1234
var temp =0
var c 
while(num>0){
   c = num%10
   temp = (temp*10)+c
   num = parseInt(num/10)  
}
console.log(temp)
  



var num = 10
for(i=2;i<num;i++){
    demo = 0
    if(num%2==0){
        demo = 1
        break;
    }
}
if(demo==1){
    console.log("not prime")
}
else{
    console.log("prime")
}
console.lo(num)