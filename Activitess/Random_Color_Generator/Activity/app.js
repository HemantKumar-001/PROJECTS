let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = Gcolor();
    h3.innerText = randomColor;
    h3.style.color=randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
})

function Gcolor(){
    let red=Math.floor(Math.random()* 255);
    let green=Math.floor(Math.random()* 255);
    let blue=Math.floor(Math.random()* 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}






















// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let random=Gcolor();
//     let div=document.querySelector("div");
//     div.style.backgroundColor= random;
// })

// function Gcolor(){
//     let red=Math.floor(Math.random()* 255);
//     let green=Math.floor(Math.random()* 255);
//     let blue=Math.floor(Math.random()* 255);
//     color= `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



// ! 
// let box=document.querySelector("#box");

// box.addEventListener("mouseenter",function(){
//     console.log("Mouse entered!");
// });




// !

