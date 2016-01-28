var food = require('./hero_game_food');
var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.talk = function(){
    console.log('My name is ' + this.name);
  },
  this.eat = function(){
    console.log('I fancy a ' + food.name + '. As my health is' + this.health);
    if(food.name === favFood){
      this.health += food.repValue * 1.5;
    }else{
      this.health += food.repValue;
    }
    console.log('That ' + food.name + ' was very satisfying. My health is now ' + this.health);
  }
  
}

var hero1 = new Hero('Corban', 100, 'banana');

hero1.talk();
hero1.eat();

module.exports = hero1;