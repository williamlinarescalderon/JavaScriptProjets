function testingAnd(valor){

    if(valor >=10 && valor <= 20){

        return "Range inside";
    }

        return "range outside";
}

console.log(testingAnd(11));

//-----------------------------------------------

function testingOr(valor){

    if(valor <10 || valor > 20){

        return "Range inside";
    }

        return "range outside";
}

console.log(testingOr(11));

