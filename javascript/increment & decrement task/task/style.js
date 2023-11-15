var plalyer1 = prompt("player 1")
var plalyer2 = prompt("player 2")
if(plalyer1 == "storn" && plalyer2 == "cessor" || plalyer1 == "paper" && plalyer2 == "stron" || plalyer1 == "cessor" && plalyer2 == "paper" ){
    console.log("player 1 : winner")
}
else if(plalyer1 == plalyer2){
 console.log("DRAW THE MATCH")
}
else {
     console.log("player 2 : winner")
}


