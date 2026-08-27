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
} , 100 );
 }

function levelUp() { 
    userSeq = [];
    level++; 
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randColor = btnColors[randIdx]; 
    let randbtn = document.querySelector(`.${randColor}`); 
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns(idx) {
if (userSeq[idx] === gameSeq[idx]) {
if (userSeq. length == gameSeq. length){
setTimeout(levelUp, 1000);
}
} else {
h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`; 
document.querySelector("body").style.backgroundColor = "red"; 
setTimeout(function(){
document.querySelector("body").style.backgroudColor = "white";
}, 150);

resetGame(); 
}
}


function btnPress(){ 
    let btn = this; 
    userFlash(btn); 
    
    userColor = btn.getAttribute("id"); 
    userSeq.push(userColor); 
    

    checkAns(userSeq.length - 1); 
} 

let allBtns = document.querySelectorAll(".box"); 
for(let btn of allBtns){
    btn.addEventListener("click", btnPress); 
} 

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}