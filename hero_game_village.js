

var Village = function(ratNum, childNum, emerFund){
  this.ratNum = ratNum;
  this.childNum = childNum;
  this.emerFund = emerFund;
  this.infested = function(){
    console.log('Whoa Hamlin is totally infested with rats. There must be at least ' + this.ratNum)};
}

var hamlin = new Village(700000, 35, 100000)

hamlin.infested();






module.exports = hamlin
