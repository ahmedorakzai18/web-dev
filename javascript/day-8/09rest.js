function add(...numbers){
    let total = 0;

    for(let i = 0; i< numbers.length; i++){
       total += numbers[i]; 
    }
    return total;
};


console.log(add(3,2));


// Code: 2

function s1(name , age , ...subjects){
    console.log(`Name is ${name} , Age is ${age} , Subject's are ${subjects}`)
};

s1("ali" , 21 , "ICT", "PF", "OOP", "DSA");