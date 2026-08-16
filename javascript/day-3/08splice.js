let food = ["Ramen" , "speghetti" , "Meat-Loaf" , "Burger" , "Fries"];

food.splice(4);         // it will delets what's on 3 or after it.

food.splice(1,2);       // this will start on index 1 and deletes how ever is written next( i.e; 2).


food.splice(0,0 , "Pizza" , "Sushi" , "Noodles")    // means at 0 index remove 0(Nothing), and also add the string at the start.

console.log(food);      // prints