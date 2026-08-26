// ----------------------------Step 1------------------------------
 let gameSeq = [];
 let userSeq = [];

 let btnColors = ["red", "green", "blue", "pink"]; 

 let started = false; 
 let level = 0; 

 let h2 = document.querySelector("h2")

 document.addEventListener("keypress" , function(){
    if(started == false){

        console.log("Game Started");
        started = true;
        levelUp();

    }
 });

// =================================================================
 function gameflash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
  btn.classList.remove("flash");
    }, 250);
 }

 function userFlash(btn) {
 btn.classList.add("userflash");
 setTimeout(function(){
 btn.classList.remove("userflash");
} , 1000);
 }

function levelUp() { 
    userSeq = [];
    level++; 
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randColor = btnColors[randIdx]; 
    gameSeq.push(randColor);
    let randbtn = document.querySelector(`.${randColor}`); 

    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn);

    gameflash(randbtn);
}

function btnPress(){
    let btn  =  this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
}

let allBtns = document.querySelectorAll(".btn"); 
for(let btn of allBtns){
    btn.addEventListener("click", btnPress); 
} 