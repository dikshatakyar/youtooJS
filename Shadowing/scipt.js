var x = 25;

var xVal = function () {
  console.log(x);
  var x = 18;
};
xVal();


/**
 * SHADOWING : when the variable declared within a certain scope has the same name as a variable declared in outer scope. variable in inner scope will temporarily shadow the variable in outer scope as they are referring to the same memory space i.e the global space
 * HOISTING : accessing the variable before initialising it
 *
 * - if instead of var, it was let, then it would give reference error due to temporal dead zone
 * - let and const are not stored in global, var is in global scope.
 */
