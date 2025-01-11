let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(event){
    let inp = document.querySelector("input");
    let newe=document.createElement("li");
    newe.innerText=inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    newe.appendChild(delBtn);
    ul.appendChild(newe);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let listNewe = event.target.parentElement;
        console.log(listNewe);
        console.log("delete");
        listNewe.remove();
    }

    else {
        console.log("don't delete");
    }
});




 