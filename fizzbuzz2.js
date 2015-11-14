// Separation of Concerns - SOC, still applies in functional programming
// we've broken it down to four functions:

(function () {
  'use strict';

  console.log('betterFizzBuzz');

  // 1: essentially a controller since it is in charge
  var betterFizzBuzz = function (from, to) {
    var i;
    for (i = from; i < to; i++) {
      fbPrint(fbFormatOutput(fbTest(i)));
    }
  };

  // 2: a tester
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

  // 3: formatter
  var fbFormatOutput = function (ar) {
    var i, output = ar[0] + ' ';
    for (i = 1; i < ar.length; i++) {
      output += ar[i];
    }
    return output;
  };

  // 4: display
  var fbPrint = function (output) {
    console.log(output);
  };

  betterFizzBuzz(1, 100);
}());

// talk about map - which transforms data and forEach which does iteration