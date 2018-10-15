var log = require('../core/log');

var hilo = {}

hilo.init = function (){
   this.name='HILO';
   this.input = 'candle'; 
   this.requiredHistory = 5;
   this.period = 20;

   this.addIndicator('hilo', 'HILO', this.period);
}

hilo.log = function(candle){
   var hilo = this.indicators.hilo;
   if (candle.close > this.indicators.hilo.hi){
      log.debug('Action COMPRADO - Age:' + this.age + '|Price: ' + this.candle.close + '|High:' + candle.high + '|Low:' + candle.low +  '| Hi:' + 	 this.indicators.hilo.hi + '|Lo:' + this.indicators.hilo.lo )
      return;
   } else if (candle.close < this.indicators.hilo.lo) {
      log.debug('Action VENDIDO - Age:' + this.age + '|Price: ' + this.candle.close + '|High:' + candle.high + '|Low:' + candle.low +  '| Hi:' + 	 this.indicators.hilo.hi + '|Lo:' + this.indicators.hilo.lo )
      return;   
   } else {
      return;
   } 


}

hilo.check = function(candle){
   if (candle.close > this.indicators.hilo.hi){
      this.advice("long")
      return;
   } else if (candle.close < this.indicators.hilo.lo) {
      this.advice("short")
      return;   
   } else {
      return;
   } 
}

module.exports = hilo;
