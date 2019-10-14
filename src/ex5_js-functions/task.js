let calc = (function() {
  let result = 0;

  return {
    add: function(num = 0){
      if (typeof num !== undefined) {
        result += num;
        return this.add;
      } return result;
    },
    subtract: function(num = 0) {
      if (typeof num !== undefined) {
        result -= num;
        return this.subtract;
      } return result;
    },
    divide: function(num = 1) {
      if (typeof num !== undefined) {
        result /= num;
        return this.divide;
      } return result;
    },
    multiply: function(num = 1) {
      if (typeof num !== undefined) {
        result *= num;
        return this.multiply;
      } return result;
    },
    reset: function() {
      result = 0;
      return result;
    },
    getResult: function() {
      return result;
    }
  }
}());

module.exports = calc;