
function Accumulator(initialValue) {
    this.value = initialValue;
    this.increment = function() {
      this.value++;
    }
    
    this.decrement = function() {
      this.value--;
    }
    return this.value
  }

const accumulator = new Accumulator(5);
accumulator.increment();
accumulator.decrement();
console.log(accumulator.value);


function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
    this.clear = function() {
        this.value = initialValue;
    }
}
const can = new CancelableAccumulator(3);
can.increment();
can.clear();
can.decrement();
console.log(can.value);
