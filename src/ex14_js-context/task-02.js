function Hangman(name) {
  this.name = name.toLowerCase();
  this.errors = 6;
  this.wrongSymbols = [];
  this.str = `_`.repeat(this.name.length);
 
  this.guess = function(value) {
    this.value = value.toLowerCase();
    for (let char of this.name) {
      if(this.value === char) {
       let pos = -1;
        while ((pos = this.name.indexOf(this.value, pos + 1)) !== -1) {
        this.str = this.str.slice(0,pos) + this.value + this.str.slice(pos+1);
        }
        if (this.str === this.name){
          return `${this.str} | You won!`
        }
        return (this.str);
      }
    } 
        this.wrongSymbols.push(value);
        this.errors--
        return (`wrong letter, errors left  ${this.errors} | ${this.wrongSymbols}`)
  }
  this.getGuessedString = function() {
    return this.str;
  }
  this.getErrorsLeft = function() {
    return this.errors;
  }
  this.getWrongSymbols = function() {
    return this.wrongSymbols;
  }
  this.getStatus = function() {
    return `${this.str} | erros left ${this.errors}`
  }
  this.startAgain = function(newName) {
    this.errors = 6;
    this.wrongSymbols = [];
    this.name = newName.toLowerCase();
    this.str = `_`.repeat(this.name.length);
  }
};
const hangman = new Hangman('webpurple');

module.exports = hangman;