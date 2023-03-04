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
    console.log("Minimal:" + min);
    console.log("Maximum:" + max);

    for (let i = 1; i <= 5; i++) {
        let tree = "";
        for (let r = 1; r <= i; r++) {
            tree += "#";
        }
        console.log(tree);
    }
