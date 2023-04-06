// 1
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { //забрав знак '=' 
      sum += arr[i];
    }
    
    let avg = sum / arr.length;
    return avg; //додав цей рядок, щоб повернути вже обчислене середнє значення
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  let avg = calculateAverage(numbers);
  console.log("The average is: " + avg); // має бути 3
  
  
  // 2
  function User(name, age) {
      this.name = name;
    this.age = age;
  }
  
  User.prototype.sayHello = function() {
      return 'Hi. My name is ' + this.name  + " and I'm " + this.age + ' years old'; //виправив рядок
  }
  
  const user = new User('Sherlock', 27);
  console.log(user.sayHello()); //додав дужки до виклику функції // має вивести "Hi. My name is Sherlock and I'm 27 years old"
  
  
  // 3  
  const calculator = function(init = 0) { //оголосив функцію перед викликом результатів
      return function () {
        return ++init; //змінив оператор
    }
  }
  const c = calculator();
  console.log(c()); // має вивести 1
  console.log(c()); // має вивести 2