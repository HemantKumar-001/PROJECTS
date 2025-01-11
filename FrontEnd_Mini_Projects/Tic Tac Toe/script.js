var count=0;
var countX=[];
var container = document.querySelector("#container");
container.addEventListener("click", function(dets){
    var num = dets.target;
    count++;
    if(count%2==0){
        if(num.textContent == "O"|| num.textContent == "X"){
            alert("Already filled");
            return;
        }
        if( "O"=="#one, #five, #nine" ){
            console.log(`Player ${count} won`);
        }
     num.innerHTML = "<h1>O</h1>";    
    }
    else{
        if(num.textContent == "O"|| num.textContent == "X"){
            alert("Already fill")
            return;
        }
        num.innerHTML = "<h1>X</h1>";
    }
    console.log(num);
        
});


function Cross(){
    var cross = document.querySelector(".box");
    cross.innerHTML = "X";
}