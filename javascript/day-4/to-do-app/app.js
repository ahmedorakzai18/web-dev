let toDo = [];

let req = prompt("Enter Your request");

while(true)
{
    if(req == "quit")
    {
        console.log("Quit");
        break;
    }

    if(req == "list")
    {   console.log("----------------");
        for(let i = 0; i < toDo.length; i++)
        {
            console.log(i , toDo[i]);
        }
        console.log("----------------");
    }
    else if(req == "add")
    {
        let task = prompt("Enter the task you wanna add");
        toDo.push(task);
        console.log("TASK ADDED");
    }
    else if(req == "delete")
        { 
            let idx = prompt("Please enter the task index:");
            toDo.splice(idx , 1);
            console.log("Task Deleted ")
        }
        else
        {
            console.log("Wrong Request");
        }
    req = prompt("Enter Your request");
}