let firstNumber;
let secondNumber;

firstNumber = prompt('Please, enter first number');
secondNumber = prompt('Please, enter second number');

alert(`Your results:

${firstNumber + '+' + secondNumber + '=' + (Number(firstNumber) + Number(secondNumber))}

${firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber)}

${firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber)}

${firstNumber + '/' + secondNumber + '=' + (firstNumber / secondNumber)}`)