class Candies {
  constructor(name, grams) {
    this.name = name;
    this.grams = grams;
  }
};

const mars = new Candies(`Mars`, 300);
const snikers = new Candies(`Snikers`, 400);
const bounti = new Candies(`Bounti`, 300);

class Gift {
  constructor(gift) {
    this.gift = gift;
  }
  staticSort() {
    return this.gift.sort(function(a,b) {
      return a.grams-b.grams;
    })
  };
  determineWeight() {
    return this.gift.reduce(function(sum,current) {
      return sum + current.grams;
    }, 0)
  }
  hasCandy (nameCandies) {
    return this.gift.filter(function(value) {
      return value.name === nameCandies;
    })
  }
}

let gift = new Gift([mars, snikers, bounti]);

console.log(gift);
console.log(gift.staticSort());
console.log(gift.determineWeight())
console.log(gift.hasCandy(`Snikers`))