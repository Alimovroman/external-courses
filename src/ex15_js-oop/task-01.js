class Candies {
  constructor(name, grams) {
    this.name = name;
    this.grams = grams;
  }
};
class Donuts extends Candies {
  forMan(price) {
    this.price = price;
  }  
};
class Cake extends Candies {
  forGirl(price) {
    this.price = price;
  }
};

const mars = new Candies(`Mars`, 300);
const snikers = new Candies(`Snikers`, 400);
const bounti = new Candies(`Bounti`, 300);
const dunkinDonuts = new Donuts(`Dunkin' Donuts`, 250);
const cheesecake = new Cake(`Cheesecake`, 250);

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
  determineName(nameCandies) {
    return this.gift.filter(function(value) {
      return value.name === nameCandies;
    })
  }
}

let giftForMan = new Gift([mars, snikers, bounti, dunkinDonuts]);
let giftForGirl = new Gift([mars, snikers, bounti, cheesecake]);

console.log(giftForGirl);
console.log(giftForGirl.staticSort());
console.log(giftForGirl.determineWeight())
console.log(giftForGirl.determineName(`Snikers`))

console.log(giftForMan);
console.log(giftForMan.staticSort());
console.log(giftForMan.determineWeight())
console.log(giftForMan.determineName(`Dunkin' Donuts`))