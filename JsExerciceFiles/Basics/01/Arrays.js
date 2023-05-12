function testArray(arr, item){

    //push enters a new number at the end of the array
    arr.push(item);
    //shift deletes the first item at the array
    return arr.shift();

}

var arr = [1,2,3,4,5];

console.log("Before: " + arr);
console.log("Numero eliminado: " + testArray(arr,6));
console.log("After "+arr);
