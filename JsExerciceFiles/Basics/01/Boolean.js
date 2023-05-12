function testBoolean(istrue){

    if(istrue){
        return ("It Was true");
    }
    
        return ("It Was not true");
    
}

console.log(testBoolean(true));


//--------------------------------------------------------------------


function testEqual(valor){

    if(valor === 12){

        return "equal";
    }

        return "not equal";
}

console.log(testEqual('12'));


//--------------------------------------------------------------------


function testLogical(valor){

    //&& means and
    if(valor <= 50 && valor >= 25){

        return "Yes";
    }

        return "No";
}

console.log(testLogical('26'));
