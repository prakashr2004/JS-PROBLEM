var amazon = {
    usename:"Prakash",
    Email :"prakashrdckap@gmail.com",
    interstedprotect:["phone"],
    userdata : [
       { protect :"device", list:["phone","speaker","blutooth devicePixelRatio","fan"] },
       {protect: "mensware", list2:["t-shirt","pants","whatch","innerwares"]}
    ],
    mostorder:["phone","whatch","t-shirt","tv",["Kitchen & dining product"," Computers ","Beauty & Personal Car"]],
    phoneprice:50000,
    cumputerprice:400000,
    tvprice:30000,
    innerwaresprice:500,
    order : { 
        offer(Amount){
        console.log(amazon.cumputerprice/5)
    }
   }
}
amazon.order.offer()
console.log("Amazon user :" +amazon.usename)
console.log(amazon.userdata)
console.log( amazon.Email)
amazon.Email="prakashjilu152003@gmail.com"
console.log(amazon.Email)

console.log(amazon.userdata.list)
