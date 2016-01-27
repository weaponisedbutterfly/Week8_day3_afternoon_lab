var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.talk = function(){
    console.log('My name is ' + this.name);
  }
}

var hero1 = new Hero('Corban', 100, 'banana');

hero1.talk();

module.exports = hero1;