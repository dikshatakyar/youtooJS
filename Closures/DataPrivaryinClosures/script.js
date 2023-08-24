let count = 0;
function counter() {
  ++count;
}

// counter();
// console.log(count);

/**
 * here, we do not have data privacy since count is a global variable, but with the help of closures, we can achieve encapsulation by encapsulating the variable into another function
 */

//better way :

function enclosed() {
  var count2 = 0;
  return function counter2() {
    ++count2;
    console.log(count2);
  };
}

var callFunc = enclosed();
callFunc();
callFunc();


/**now we can only access count2 variable by returning a function */
