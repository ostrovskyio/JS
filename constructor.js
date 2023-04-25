
function Accumulator(initialValue) {
    this.value = initialValue;
    this.increment = function() {
      this.value++;
    }
    
    this.decrement = function() {
      this.value--;
    }
  }

const accumulator = new Accumulator(5);
accumulator.increment(); //6
accumulator.increment(); //7
accumulator.decrement(); //6
console.log(accumulator.value); //має вивести кінцеве значення 6


function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
    this.clear = function() {
        this.value = initialValue;
    }
}
const can = new CancelableAccumulator(5);
can.increment(); //6
can.increment(); //7
can.decrement(); //6
can.clear(); //5
console.log(can.value); //має вивести 5
