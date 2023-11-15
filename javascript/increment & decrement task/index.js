let count = 0 ;

document.getElementById("decrement").onclick = function(){
    count-=1;
    console.log(count)
    document.getElementById("countlable").innerHTML = count;
    if(count < 0){
        document.getElementById("countlable").style.color = "red"
    }
   else if(count==0){
    document.getElementById("countlable").style.color = "black"
   }
}



document.getElementById("resert").onclick = function(){
    count=0;
    document.getElementById("countlable").innerHTML = count;
    
     document.getElementById("countlable").style.color = "black";
    

}



document.getElementById("increment").onclick = function(){
    count+=1;
    document.getElementById("countlable").innerHTML = count;
    if(count > 0){
        document.getElementById("countlable").style.color = "green"
    }
   else if(count==0){
    document.getElementById("countlable").style.color = "black"
   }


}
