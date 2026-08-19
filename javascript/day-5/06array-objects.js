const studentInfo = [
    {
        name : "Abdul",
        gpa : 1.4,
        grade : "C"
    },
    {   
        name : "Abid",
        gpa : 2.14,
        grade : "B"
    },
    {
        name : "Basit",
        gpa : 3.21,
        grade : "A"
    },
    {
        name : "Carlos",
        gpa : 1.50,
        grade : "C"
    }
];

console.log(studentInfo);

console.log("---------------------------");

console.log(studentInfo[2]);

studentInfo[2].name = "Jabbir";     // name updated
studentInfo[1] = {gender :"male"};

console.log(studentInfo[2]);