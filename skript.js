let firstNumber;
let secondNumber;

firstNumber = prompt('Please, enter first number');
secondNumber = prompt('Please, enter second number');

if ((firstNumber || secondNumber)==='') {
    alert ('Error')
} 

else if (secondNumber === 0) {
    alert(`Your results:

    ${firstNumber + '+' + secondNumber + '=' + (Number(firstNumber) + Number(secondNumber))}

    ${firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber)}

    ${firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber)}

    ${'Error'}`)
}

else if (firstNumber < secondNumber) {
    confirmation=confirm ('Are you sure you want to continue?')

       if (!confirmation){
        alert ('Canceled')
       }
       else {
       alert(`Your results:
    
       ${firstNumber + '+' + secondNumber + '=' + (Number(firstNumber) + Number(secondNumber))}
       
       ${firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber)}
       
       ${firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber)}
       
       ${firstNumber + '/' + secondNumber + '=' + (firstNumber / secondNumber)}`)
    } 
} 
else {
    alert(`Your results:
    
    ${firstNumber + '+' + secondNumber + '=' + (Number(firstNumber) + Number(secondNumber))}
    
    ${firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber)}
    
    ${firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber)}
    
    ${firstNumber + '/' + secondNumber + '=' + (firstNumber / secondNumber)}`)
}

