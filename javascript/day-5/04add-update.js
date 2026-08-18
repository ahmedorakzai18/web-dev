let Car = {
  name: "Honda",
  fuelAverage: 13,
  engine: "V6",
  price: 4.5,

  color: ["Black", "White", "Red"],
};

console.log(Car.name); // this does the accessing
console.log(Car["name"]); // accessing Alternative

console.log("-------------------Object value UPDATED------------------");
Car.name = "Audi"; // here we updated or changed the object of an existing key

console.log(Car.name); // here is the proof

console.log("-------------------NEW KEY CREATED------------------");
Car.model = 1998; // here we added a whole new key and assigned to it as well

console.log(Car);

console.log("-------------------KEY DELETED------------------");

delete Car.price;   // a way to delete a key 

console.log(Car);