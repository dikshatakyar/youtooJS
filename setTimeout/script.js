function x() {
  const x = 18;
  setTimeout(() => console.log(x), 1000);
  console.log("JavaScipt...");
  console.log("JavaScipt2...");
  console.log("JavaScipt3...");
  console.log("JavaScipt4...");
  console.log("JavaScipt5...");
}
x();


//quest : to print 1, 2, 3, 4, 5 after every second

function a() {
  for (var i = 1; i <= 5; ++i) {
    setTimeout(() => console.log(i), i * 1000);
  }
  console.log("heya");
}
// a();

/**
 * the output was 6 here, as i is pointing to the same memory location everytime, to avoid this we can use let/const instead of var, as they are block-scope
 */

//IMPROVED METHOD :
function c() {
  for (var i = 1; i <= 5; ++i) {
    function close(i) {
      setTimeout(() => console.log(i), i * 1000);
    }
    close(i);
  }
  console.log("heya");
}
c();

/**
 * EXPLAINATION :
 * now by enlosing our into close(), we have a new copy of i everytime, and so it works.
 */
