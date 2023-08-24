 /** Currying is an advanced function in JavaScript which is used for the manipulation of functions' arguments and parameters.
  * 
  * Currying refers to the process of transforming a function with multiple arity into the same function with less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation
  * 
  * using :-
  * 1. BIND
  * 2. CLOSURES
  */


const multiply = function(x, y){
    console.log(x * y);
}

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

const multiplyByThree = multiply.bind(this);
multiplyByThree(3,8);

 

//using closures

const multiplyClosure = function(x){
    return function(y){
        //closure : when this function would be returned it would have access to x variable even after returning
        console.log(x * y);
    }
}

const multiplyHere = multiplyClosure(4);

multiplyHere(12);

