// required indicators
// HILO 

var Indicator = function(period) {
  this.input = 'candle';
  this.period = period
  this.highs = []
  this.lows =[]
  this.hi = 0;
  this.lo = 0;
  this.age = 0;
}

Indicator.prototype.update = function(candle) {
   if(this.age <= this.period-1){
      this.highs.push(candle.high)
      this.lows.push(candle.low)
      this.age = this.age+1
      return;
   } else {
      var highArraySum = this.highs.reduce((a,b) => a+b,0); //This sums every element of an array.
      var lowArraySum = this.lows.reduce((a,b) => a+b,0); // This too.
      this.hi = highArraySum/this.period
      this.lo = lowArraySum/this.period
      this.hi = this.hi.toFixed(2);
      this.lo = this.lo.toFixed(2);
      this.highs.shift()
      this.lows.shift()
      this.highs.push(candle.high)
      this.lows.push(candle.low)
   }
}

module.exports = Indicator;
