var hero = require('./hero_game');
var assert = require('assert');


describe('Hero', function(){
  it('name should be Corban', function(){
    assert.equal('Corban', hero.name);
  });
  });