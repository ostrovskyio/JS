// Перевірка на пустотуs
const check = {

}
function isEmpty(object) {
   let keysArray =  Object.keys(object)
   console.log(keysArray)
    if(keysArray.length === 0) {
        return false;
    }
    return true;
}
console.log(isEmpty(check));

// Обєкт з повідомленням

const user = {
    name: 'name',
    age: 'age',
    sayHello() {
        return ('Привіт, я ' + this.name + ', мені ' + this.age + ' років')
    }
}

console.log(user.sayHello());

// Калькулятор

const calculator = {
    ask() {
        this.num1 = +prompt('Enter first number');
        this.num2 = +prompt('Enter second number');
    },
    sum() {
        alert(this.num1 + '+' + this.num2 + '=' + (this.num1 + this.num2))
    }, 
    mul() {
        alert(this.num1 + '*' + this.num2 + '=' + (this.num1 * this.num2))
    }
}

calculator.ask();
calculator.sum();
calculator.mul();
