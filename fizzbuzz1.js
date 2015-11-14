(function () {
  'use strict';

  console.log('fizzBuzz');

  // this is not a function, it is a procedure
  // our first pass attempt works and is fairly concise,
  // but no separation of concerns no flexibility either.
  var fizzBuzz = function () {
    var i, printVal;
    for (i = 1; i <= 100; i += 1) {
      printVal = i + ' ';
      if (i % 3 === 0) {
        printVal += 'Fizz';
      }
      if (i % 5 === 0) {
        printVal += 'Buzz';
      }
      console.log(printVal);
    }
  };

  fizzBuzz();
}());

// let's start thinking functionally
