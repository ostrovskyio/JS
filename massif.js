const numbers = [
    10,
    21,
    32,
    43,
    54,
    65,
    76,
    87,
    98,
    109];

    let sum = 0;

    for (let i=0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            sum = sum + numbers[i];
        }
    }
    console.log("Sum of numbers:" + sum);

    let min = Infinity;
    let max = -Infinity;

    for (let i=0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number"){
            if (numbers[i] < min) {
            min = numbers[i];
            }
            if (numbers[i] > max) {
            max = numbers[i];
            }
        }
    }


    function findMin(array) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
          if (array[i] < min) { 
            min = array[i];
          }
        }
        return min;
    }

    function findMax(array) {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
          if (array[i] > max) {
            max = array[i];
          }
        }
        return max;
    }

    console.log(`Minimum: ${findMin(numbers)}`);
    console.log(`Maximum: ${findMax(numbers)}`);
    

    let tree = "";
    for (let i = 0; i < 5; i++) {
        tree += "#";
        console.log(tree);
      }
