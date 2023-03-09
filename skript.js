let firstNumber;
let secondNumber;

firstNumber = +prompt('Please, enter first number');
secondNumber = +prompt('Please, enter second number');


function sum(firstNumber, secondNumber) {
    if (!isNaN(firstNumber) && (typeof firstNumber === "number") && !isNaN(secondNumber) && (typeof secondNumber === "number")) {
        return (firstNumber + '+' + secondNumber + '=' + (Number(firstNumber) + Number(secondNumber)));
    }
    return('Error')
}

function min(firstNumber, secondNumber) {
    if (!isNaN(firstNumber) && (typeof firstNumber === "number") && !isNaN(secondNumber) && (typeof secondNumber === "number")) {
        return (firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber));
    }
    return('Error')
}

function mng(firstNumber, secondNumber) {
    if (!isNaN(firstNumber) && (typeof firstNumber === "number") && !isNaN(secondNumber) && (typeof secondNumber === "number")) {
        return (firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber));
    }
    return('Error')
}

function dil(firstNumber, secondNumber) {
    if (!isNaN(firstNumber) && (typeof firstNumber === "number") && !isNaN(secondNumber) && (typeof secondNumber === "number")) {
        return (firstNumber + '/' + secondNumber + '=' + (firstNumber / secondNumber));
    }
    return('Error')
}

if ((firstNumber || secondNumber)==='') {
    alert ('Error')
} 

else if (secondNumber === 0) {
    alert(`Your results:

    ${sum(firstNumber, secondNumber)}

    ${min(firstNumber, secondNumber)}

    ${mng(firstNumber, secondNumber)}

    ${'Error'}`)
}

else if (firstNumber < secondNumber) {
    confirmation=confirm ('Are you sure you want to continue?')

       if (!confirmation){
        alert ('Canceled')
       }
       else {
       alert(`Your results:
    
       ${sum(firstNumber, secondNumber)}
       
       ${min(firstNumber, secondNumber)}
       
       ${mng(firstNumber, secondNumber)}
       
       ${dil(firstNumber, secondNumber)}`)
    } 
} 
else {
    alert(`Your results:
    
    ${sum(firstNumber, secondNumber)}
       
    ${min(firstNumber, secondNumber)}
    
    ${mng(firstNumber, secondNumber)}
       
    ${dil(firstNumber, secondNumber)}`)
}

