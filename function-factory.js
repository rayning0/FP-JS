/**
 * Created by troymiles on 11/13/15.
 */

// functions in JavaScript are super-powered
(function(){
  'use strict';

  // here is a really simple function factory
  function addN(n){
    // a function is returned!!! important
    return function(x){
      return n + x;
    }
  }

  // and examples of its use

  var add10 = addN(10);
  console.log(add10(1));

  var add50 = addN(50);
  console.log(add50(1));
}());


// go to fizzBuzz 5
