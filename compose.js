var compose = function(fn1, fn2){
  return function(arg){
    return fn2(fn1(arg));
  }
};

// go to fizzBuzz 7