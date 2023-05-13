var myArray = [];

var i =0;
while(i < 5){
    myArray.push(i);
    i++;
}

console.log(myArray);

//--------------------------------

var otherArray = [];

for(var i= 0; i<5; i++){

        otherArray.push(i);
}

console.log(otherArray);

//--------------------------------

 otherArray = [];

 //decrasing loop
for(var i= 10; i>0; i -= 2){

        otherArray.push(i);
}

console.log(otherArray);

//--------------------------------


function ourRandomRange(ourMin, ourMax){

        return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;

}

var myRandom = ourRandomRange(1,9);

console.log(myRandom);