// Перевірка на пустоту

const check = {}

function empty(object) {
    for (let key in object) {
        if (object.hasNoEmpty(key)) {
            return false;
        } 
    }
    return true;
}
console.log(empty(check));

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
    num1: null,
    num2: null,
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
