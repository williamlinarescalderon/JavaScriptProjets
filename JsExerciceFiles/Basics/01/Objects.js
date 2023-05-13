//example

var ourDog = {
    "name"      : "dexter",
    "legs"      : "4",
    "age"       : "5",
    "friends"   : ["everything"],
    "the food"  : "meat"
};

//to add new properties you can use the braket simbol []
ourDog['color'] = "gold";

//acces to the properties 
//properties witout space into the name, you can access with the dot 
var nombre  =   ourDog.name;
var age     =   ourDog.age;
//properties with empty space into the declaration, you can acces using brackets
var comida  =   ourDog["the food"]; 

//we can overwrite object's properties with the assigning simbol "=" 
 ourDog.legs = "2";


console.log(nombre,age, ourDog.legs, ourDog.color);



//-------------------------------------------------

function phoneticLookUp(val){
    var result = "";

    var objeto = {
        "alpha"     : "Adams",
        "bravo"     : "Boston",
        "charlie"   : "Chicago",
        "delta"     : "Denver"
    };

    result = objeto[val];

    return result;
}

console.log(phoneticLookUp("bravo"));