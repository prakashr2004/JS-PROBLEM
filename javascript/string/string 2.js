// var a = prompt("Enter The Input")
// var test = a.replaceAll(" "," - ")
//  var test2 = test.toLowerCase()
//  alert(test2)

// -----------------6.----------------------------------
 
// let spl1=prompt("Enter An Input")
// let spl2=prompt("How Many Words You Wants")
// let spl3=spl1.split(" ");
// spl3=spl3.slice(0,spl2)

// console.log(spl3.join());

// -----------------10.---------------------------------------
//  var a = prompt("Enter The Stament")
//  var b =prompt ("Slice The Word")
//  var c = a.replace(b,"")
//  console.log(c)
//  ----------------11-------------------------------
// var a  = ("Welcome to DCKAP")
// var b = /dCkap/gi;
// var c = a.match(b)
// console.log(c)
// if (c !==null)
// {
//     console.log("match")
// }
// else{
//     console.log("not mach")
// }
// ------------------12-------------------------------------------------
// var a  = ("abcd")
// var b = /Abcd/gi;
// var c = a.match(b)
// console.log(c)
// if (c !==null)
// {
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// -------------------------------------------------------------------------------------------------

// ---------------------------13------------------------------------------------------------

// str = "dcKAP";
// res = "";
// for (var i = 0; i < str.length; i++) {
//     c = str[i];
//   if (c == c.toUpperCase()) {
//     res += c.toLowerCase();
//   } else if (c == c.toLowerCase()) {
//     res += c.toUpperCase();
//   }
// }r2
// console.log(res)


// ---------------7.first word captial--------------------------


var str = "javascript progaming language"
var str2  = str.split(" ")
var b = ""
// console.log(str2)
for(i=0;i<str2.length;i++){
 b +=  str2[i][0].toUpperCase()+str2[i].slice(1)+" ";
//  console.log(b)
}
console.log(b)