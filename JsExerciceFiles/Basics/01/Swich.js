function caseSwich(valor){

    var answer = "";

    switch(valor){

        case 1:
            answer = "alpha";
            break
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
        break
        case 4:
            answer = "delta";
            break
        default:
            answer = "Not Defined";
            break;
    }

    return answer;
}

console.log(caseSwich(5));