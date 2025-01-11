var start = false;
var score = 0;
var timmer = 60;
var hit = 0;
var life = 5;


function hitval(){
        hit = Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent = hit;
}

function timerint(){
    setInterval(function(){
        if(timmer>0){
        timmer--;
        }
        else{
            clearInterval(timmer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
            start = false;
            score = 0;
            timmer = 0;
            hit = 0;
            life = 0;
        }
        document.querySelector("#timmer").textContent = timmer;

    }, 1000);
}

function increaseScore(){
    score += 10;  
    document.querySelector("#Score").textContent = score;
}

function Life(){
    document.querySelector("#Life").textContent = life;
}

function Liferemain(){
  life -= 1;
  if(life == 0){
    timmer =0;
  }  
  document.querySelector("#Life").textContent = life;
}

function makebubbles(){
    var clutter = "";
    for(var i=1; i<=105; i++){
    var random = Math.floor(Math.random()*20);
    clutter+=`<div class="bubbles">${random}</div>`;
    document.querySelector("#pbtm").innerHTML = clutter;
  }
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var ClickedNum = Number(dets.target.textContent);
    console.log(ClickedNum);
    if(ClickedNum == hit){
        timmer+=3;
        increaseScore();
        hitval();
        makebubbles();
    }

    else if(ClickedNum != hit){
        timmer -= 3;
        Liferemain();
    }
})

document.querySelector("#start").addEventListener("click", function(){
    start = true;
    hitval();
    makebubbles();
    timerint();
    Life();
});


document.querySelector("#restart").addEventListener("click", function(){
        start = false;
        score = 0;
        timmer = 60;
        life = 5;
        hit = 0;
        
    hitval();
    makebubbles();
    timerint();
    Life();
})