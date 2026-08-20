let student1 = {
    name : "Jabir", 
    roll : 12,

    english : 81,
    math : 61,
    physics : 89,

    average()
    {
        let avg = (this.english+this.math+this.physics)/3;
        console.log(avg);
    }
}

student1.average();


let greet = {
    name : "haris",
    namee: "hamid",

    gg()
    {
       console.log(this.name , ", Good Morning");
       console.log(this.namee , ", Good Morning");
    }
}

greet.gg();

// window is the browser's global object. It provides access to browser features such as alert(), prompt(), console, window dimensions, timers, and much more.