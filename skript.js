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
    document.getElementById("results").innerHTML = 'Error'
} 

else if (secondNumber === 0) {
    document.getElementById("results").innerHTML =
    
    `Your results:

    ${sum(firstNumber, secondNumber)}

    ${min(firstNumber, secondNumber)}

    ${mng(firstNumber, secondNumber)}

    ${'Error'}`
}

else if (firstNumber < secondNumber) {
    confirmation=confirm ('Are you sure you want to continue?')

       if (!confirmation){
        alert ('Canceled')
       }
       else {
        document.getElementById("results").innerHTML =
        
       `Your results:
    
       ${sum(firstNumber, secondNumber)}
       
       ${min(firstNumber, secondNumber)}
       
       ${mng(firstNumber, secondNumber)}
       
       ${dil(firstNumber, secondNumber)}`
    } 
} 
else {
    document.getElementById("results").innerHTML =
    
    `Your results:
    
    ${sum(firstNumber, secondNumber)}
       
    ${min(firstNumber, secondNumber)}
    
    ${mng(firstNumber, secondNumber)}
       
    ${dil(firstNumber, secondNumber)}`
}

alert = document.getElementById('results');