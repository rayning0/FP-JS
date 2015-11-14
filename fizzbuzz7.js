// now we have removed all of our hard coded bits, everything is passed in

(function () {
  'use strict';

  console.log('fizzBuzz7');

  var compose = function(fn1, fn2){
    return function(arg){
      return fn2(fn1(arg));
    }
  };

  var evenBetterFizzBuzz = function (from, to, testFunc, formatFunc, outputFunc) {
    const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
    const mapFunc = compose(testFunc, formatFunc);
    const fbResult = ar.map((elem, index)=>mapFunc(elem));
    fbResult.forEach(outputFunc);
  };

  var ho_fb_primitive = function(condition, whenTrue){
    return function(tuple) {
      if(condition(tuple[0])) tuple.push(whenTrue);
        return tuple;
    }
  };

  var fbDefault = x => [x];
  var fz = ho_fb_primitive(x =>x%3 === 0, 'Fizz');
  var bz = ho_fb_primitive(x =>x%5 === 0, 'Buzz');
  var bang = ho_fb_primitive(x =>x%7 === 0, 'Bang');
  var fbTest = num => bang(bz(fz(fbDefault(num))));

  var fbFormatOutput = function (ar) {
    var i, output = ar[0] + ' ';
    for (i = 1; i < ar.length; i++) {
      output += ar[i];
    }
    return output;
  };

  var fbPrint = function (output) {
    console.log(output);
  };

  evenBetterFizzBuzz(1, 106, fbTest, fbFormatOutput, fbPrint);
}());