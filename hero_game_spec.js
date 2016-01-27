var hero = require('./hero_game');
var food = require('./hero_game_food');
var assert = require('assert');


describe('Hero', function(){
  it('name should be Corban', function(){
    assert.equal('Corban', hero.name);
  });

  it('Corbans health should increase by 3 to 78', function(){
  hero.health = 75;
  hero.eat();
  assert.equal(78, hero.health);
  });
});

describe('Food', function(){
  it('name should be banana', function(){
    assert.equal('banana', food.name);
  });
});

