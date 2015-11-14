// here we create a function factory to generate our tests functions

(function () {
  'use strict';

  console.log('fizzBuzz5');

  var evenBetterFizzBuzz = function (from, to) {
    const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
    const fbResult = ar.map((elem, index)=>fbFormatOutput(fbTest(elem)));
    fbResult.forEach(fbPrint);
  };

  // function factory which test our fizz buzz condition
  var ho_fb_primitive = function(condition, whenTrue){
    return function(tuple) {
      if(condition(tuple[0])) tuple.push(whenTrue);
        return tuple;
    }
  };

  // using es6 arrow functions since they are prettier
  var fz = ho_fb_primitive(x =>x%3 === 0, 'Fizz');
  var bz = ho_fb_primitive(x =>x%5 === 0, 'Buzz');
  var fbDefault = x => [x];
  var fbTest = num => bz(fz(fbDefault(num)));

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

  evenBetterFizzBuzz(1, 100);
}());

// think about how we would add another test function