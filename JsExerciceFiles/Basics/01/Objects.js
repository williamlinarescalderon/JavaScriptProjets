//example

var ourDog = {
    "name" : "dexter",
    "legs" : "4",
    "age"  : "5",
    "friends" : ["everything"],
    "the food": "meat"
};

//acces to the properties 
//properties witout space into the name, you can access with the dot 
var nombre  =   ourDog.name;
var age     =   ourDog.age;
//properties with empty space into the declaration, you can acces using brackets
var comida  =   ourDog["the food"]; 

//we can overwrite object's properties with the assigning simbol "=" 
 ourDog.legs = "2";


console.log(nombre,age, ourDog.legs);