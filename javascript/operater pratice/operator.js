// function myFunction(Number){
//     if(Number % 2 == 0)
//     document.write("Even")
//     else{
//         document.write("odd")
//     }
// }
// myFunction()

// --------------------------------------
// var input = (prompt("check the statemet"))
//     if(isNaN(input))
//     {
//         alert("text")
//     }
//     else{
//         alert("Number")
//     }

// -------------------------------------------------------

// var a = prompt("enter the number")
// var b = prompt("enter the second number")
// if (a>b){
//     alert("the biggest number"+ a)
// }
// else{
//     alert("the biggest number"+b)
// }
// -------------------------------------------------------------------
// var num1= prompt("enter the fnumber")
// var num2 = prompt("enter the snumber")
// var num3 = prompt("enter the tnumber")
// if (num1>num2 && num1>num3){
//     alert("the biggest number"+ num1)

// }
// else if (num2>num1 && num2>num3) {
// alert("the biggest number"+num2)
// }
// else{
//     alert("the biggest number"+num3)
// }

// --------------------------------------------------------

// var num = prompt("number") 
// if ( num >=  20 && num <= 90)
// {
//     alert("between the range"+ num)
// }
// else{
//     alert("out the range"+num)
// }
// ------------------------------------------------


// let a  = prompt("Enter the number 1");
// let b  = prompt("Enter the number 2");
// let c  = prompt("Enter the number 3");
// let valid = a ==  b 
// if (valid && valid < c)
// {
//     alert("a&b equal is greter than c")
// }

// -------------------------------------------

var a =  parseInt(prompt("Enter The FirstValue"))
var b =  parseInt(prompt("Enter The SecondValue"))
var c =  parseInt(prompt("Enter The TherdValue"))
if ( a > b && a > b)
    {
        alert("The Bigest Number"+a);
    }
    else if( b > c )
    {
        alert("The Bigest Number"+b);
    }
    else if(c > a)
    {
        alert("the Bigest Number"+c);
    }
    else if(a==b && a > c )
    {
    alert("a&b equal is largest than c");
    if(a==b && a<c)
    {
    alert
    }
    }
    else if(a==c && a > b)
    {
    alert("a&c equal is largest than b")
    }
    else if(b==c && b > a )
    {
        alert("b&c equal is largest than a")
}
else if(a==b && b==c)
{
    alert("Both Are Equal")
}
// -----------Range-----------------------------

// let start=parseInt(prompt("Enter a starting value:"));
// let end=parseInt(prompt("Enter a Ending value:"));
// let x=parseInt(prompt("Enter a value"));

// if((x >=start && x<=end ) || (x<=start && x>=end)){
//     alert("Between the range");
// }
// else{
//     alert("outof the range");
// }


// ------------------leap year------------------------------------

// let leap=parseInt(prompt("Enter a year:"))

// if((leap %4==0) && !(leap %100==0)||(leap %400==0)){
//     alert("This year is leaper="+leap)
// }
// else{
//     alert("This not a leaper="+leap)
// }