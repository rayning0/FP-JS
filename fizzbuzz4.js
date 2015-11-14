// the test function is really 4 steps

(function () {
  'use strict';

  console.log('fizzBuzz4');

  // again some incremental changes
  // getting rid of the loop and replacing it with a map
  var evenBetterFizzBuzz = function (from, to) {
    const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
    const fbResult = ar.map((elem, index)=>fbFormatOutput(fbTest(elem)));
    fbResult.forEach(fbPrint);
  };

  // 1: convert the number into an array
  var fbDefault = function(x){
    return [x];
  };

  // 2: appends Fizz if the number is a multiple of 3
  var fz = function(tuple){
    if(tuple[0]%3 === 0) tuple.push('Fizz');
    return tuple;
  };

  // 3: appends Buzz if the number is a multiple of 5
  var bz = function(tuple){
    if(tuple[0]%5 === 0)tuple.push('Buzz');
    return tuple;
  };

  // 4: goes from step 1 to 3
  var fbTest = function(num){
    return fz(bz(fbDefault(num)));
  };

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

// steps 2 and 3 have a bad code smell, the functions are very similar
// If only there was a way to combine them...

// go to function-factory
