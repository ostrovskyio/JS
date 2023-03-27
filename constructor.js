
function Accumulator(initialValue) {
    this.value = initialValue;
    
    this.increment = function() {
      this.value++;
    }
    
    this.decrement = function() {
      this.value--;
    }
  }

const accumulator = new Accumulator(0);
accumulator.increment();
accumulator.increment(); 
accumulator.decrement();
  