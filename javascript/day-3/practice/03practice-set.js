let ttt = [['X' , null , "O"] , [null , 'X' , null] , ['O' , null , 'X']];

console.log(ttt);

ttt[0][1] = 'O';    // Here we changed the value, and eventually the original value is also changed.
    
console.log(ttt);