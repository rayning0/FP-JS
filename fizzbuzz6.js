// need to add a "Bang" to our code?
// no problem, our factory can generate the function and then we add it to our test

(function () {
  'use strict';

  console.log('fizzBuzz6');

  // again some incremental changes
  // getting rid of the loop and replacing it with a map
  var evenBetterFizzBuzz = function (from, to) {
    const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
    const fbResult = ar.map((elem, index)=>fbFormatOutput(fbTest(elem)));
    fbResult.forEach(fbPrint);
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
  // adding a bang function is easy, create it
  var bang = ho_fb_primitive(x =>x%7 === 0, 'Bang');

  // then add to our test method
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

  evenBetterFizzBuzz(1, 106);
}());

// talk about composition
// go to compose.js