var hero = require('./hero_game');
var food = require('./hero_game_food');
var Village = require('./hero_game_village')
var assert = require('assert');


describe('Hero', function(){
  it('name should be Corban', function(){
    assert.equal('Corban', hero.name);
  });

  it("Corban's health should increase by 3 to 78", function(){
  hero.health = 75;
  hero.eat();
  assert.equal(80, hero.health);
  });
});

describe('Food', function(){
  console.log(food);
  it('name should be roastBeef', function(){
    assert.equal('roastBeef', food.name);
  });


  describe('hamlin', function(){
    it(' should be overrun by 7000000 rats', function(){
      hamlin = new Village(700000, 35, 100000);
      assert.equal(700000, hamlin.ratNum);
    });
  });

});

