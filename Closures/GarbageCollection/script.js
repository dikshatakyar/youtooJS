function outer() {
  var x = 8,
    z = 18;
  return function inner() {
    console.log(x);
  };
}

outer()();

/**
 * here the inner() forms closure with x and z both, but with smart garbage collection, it will only remember x, and z would be gone from the memory
 */
