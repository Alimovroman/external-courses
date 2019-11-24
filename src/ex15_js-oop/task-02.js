function Appliences(name, powerConsumption) {
  this.name = name;
  this.powerConsumption = powerConsumption;
}
function Room (name) {
  this.name = name;
};
Room.prototype.pluggetIn = function(pluggetIn) {
  this.pluggetIn = pluggetIn;
};
Room.prototype.identifyAppliences = function() {
  return this.name.sort(function(a,b) {
    return a.powerConsumption - b.powerConsumption;
  })
}
Room.prototype.determineConsumption = function() {
  return this.name.reduce(function(sum,current){
    return sum + current.powerConsumption;
  },0)
}
Room.prototype.determineName = function(nameAppliences) {
    return this.name.filter(function(value) {
      return value.name === nameAppliences;
    })
  }
let cofeeMaker = new Appliences(`cofee maker`, 350);
let teapot = new Appliences(`teapot`, 150);
let refrigerator = new Appliences(`refrigerator`, 500);
let room = new Room([cofeeMaker, teapot, refrigerator]);
room.pluggetIn([teapot, refrigerator]);
console.log(room);
console.log(room.identifyAppliences());
console.log(room.determineConsumption());
console.log(room.determineName(`teapot`));