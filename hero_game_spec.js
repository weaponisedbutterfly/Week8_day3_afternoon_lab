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
  assert.equal(80, hero.health);
  });
});

describe('Food', function(){
  it('name should be roastBeef', function(){
    assert.equal('roastBeef', food.name);
  });
});

