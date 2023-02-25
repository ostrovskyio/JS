let firstNumber;
let secondNumber;

firstNumber = prompt('Please, enter first number');
secondNumber = prompt('Please, enter second number');

alert(`Your results:
\n
${firstNumber + '+' + secondNumber + '=' + (Number(firstNumber) + Number(secondNumber))}
\n
${firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber)}
\n
${firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber)}
\n
${firstNumber + '/' + secondNumber + '=' + (firstNumber / secondNumber)}`);