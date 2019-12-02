function Calculator(){
  this.result = 0;
  this.add = function(num = 0){
    if (typeof num !== undefined) {
        this.result += num;
    } return this;
  }
  this.subtract = function(num = 0) {
    if (typeof num !== undefined) {
      this.result -= num;
    } return this;
  }
  this.divide = function(num = 1) {
    if (typeof num !== undefined) {
      this.result /= num;
    } return this;
  }
  this.multiply = function(num = 1) {
    if (typeof num !== undefined) {
      this.result *= num;
    } return this;
  }
  this.setState = function(num = 0) {
    this.result = num;
    return this;
  }
  this.fetchData = function(callback) {
    setTimeout(() => { this.result = callback(500) }, 1000);
    return this;
  }
  this.reset = function() {
    this.result = 0;
    return this;
  }
  this.getResult = function() {
    return this.result;
  }
};
let calc = new Calculator();
module.exports = calc;