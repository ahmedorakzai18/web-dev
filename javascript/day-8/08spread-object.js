let student1 = 
    {
        name:"Ali",
        city:"Kohat"
    }
let student2 = 
    {
        name:"Basit",
        city:"Okara"
    }

const print1 = {...student1, id : 123};
const print2 = {...student2 , id : 124};

console.log(print1);
console.log(print2);