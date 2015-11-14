// this one is a bit hard to read but we can skip the generation of intermediate functions,
// which are only passed to something else with lambdas

(function () {
  'use strict';

  console.log('fizzBuzz9!');

  var compose = function (fn1, fn2) {
    return function (arg) {
      return fn2(fn1(arg));
    }
  };

  // our first high order function
  var ho_fb_primitive = function (condition, whenTrue) {
    return function (tuple) {
      if (condition(tuple[0])) tuple.push(whenTrue);
      return tuple;
    }
  };

  // an another high order function
  var ho_fb_controller = function (testFunc, formatFunc, outputFunc) {
    return function (from, to) {
      const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
      const mapFunc = compose(testFunc, formatFunc);
      const fbResult = ar.map((elem, index)=>mapFunc(elem));
      fbResult.forEach(outputFunc);
    };
  };

  var fbFormatOutput = function (ar) {
    var i, output = ar[0] + ' ';
    for (i = 1; i < ar.length; i++) {
      output += ar[i];
    }
    return output;
  };

  // this is the only impure functions which remains, but it is to be expected
  var fbPrint = function (output) {
    console.log(output);
  };

  var fizzBuzz = ho_fb_controller(compose(compose(x => [x], ho_fb_primitive(x=>x % 3 === 0, 'Fizz')),
    ho_fb_primitive(x=>x % 5 === 0, 'Buzz')),
    fbFormatOutput, fbPrint);

  fizzBuzz(1, 106);
}());