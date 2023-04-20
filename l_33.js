Array.prototype.pow = function(n) {
    return this.map(function(x) {
      return Math.pow(x, n);
    });
  };

Function.prototype.defer = function(n) {
    var fn = this;
    setTimeout(function() {
      fn();
    }, n);
  };