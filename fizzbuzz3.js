
(function () {
  'use strict';

  console.log('evenBetterFizzBuzz');

  // again some incremental changes
  // getting rid of the loop and replacing it with a map, passing in the range
  var evenBetterFizzBuzz = function (from, to) {
    // we generate the array using ES6
    const ar = Array.from({length: to - from + 1}, (elem, index)=> index + 1);
    // we map over the array to generate the results array
    const fbResult = ar.map((elem, index)=>fbFormatOutput(fbTest(elem)));
    // and finally we render the results
    fbResult.forEach(fbPrint);
  };

  var fbTest = function (num) {
    var retval = [num];
    if (num % 3 === 0) {
      retval.push('Fizz');
    }
    if (num % 5 === 0) {
      retval.push('Buzz');
    }
    return retval;
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

// the test method is kind of a mess. All of the logic is hard coded into it