/**
 * WHAT IS ASYNC?
 * - ASYNC is a keyword that is used before a function to create an async function.
 */

/** DEFINING ASYNC FUNCTION
 * - this async function always returns a promise
 *
 * TWO CASES :-
 * -- either we return a promise
 * -- if we return a value (non-promise value), it will take this value, wrap it inside a promise and will return a promise.
 */

async function getData() {
  return "HELLO I AM A VALUE";
}

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

/** creating a promise and returning it : */

const Pr = new Promise((resolve, reject) => {
  resolve("PROMISE RESOLVED VALUE");
});

// async function func() {
//   return Pr;
// }

// const getPrData = func();

// getPrData.then((res) => console.log(res));

/**USING ASYNC ALONG WITH AWAIT
 * - it is used to handle promises.
 */

/** DEMO to show how we used to handle promises before async await */

const learnPromise = new Promise((resolve, reject) =>
  resolve("PROMISE GETS RESOLVED")
);

function learnPromiseFunc() {
  learnPromise.then((res) => console.log(res));
}

// learnPromiseFunc();

/** HANDLING WITH ASYNC AWAIT NOW :
 * - we use "AWAIT" in front of the promise
 * - the promise gets resolved and the data will come into a constant variable.
 */

async function handleAsyncPromise() {
  const val = await learnPromise;
}

// handleAsyncPromise();

/**
 * - AWAIT is a keyword that can only be used inside an async function.
 * - it resolves the promise.
 */

//MODIFY A PROMISE - MAKE A PROMISE THAT TAKES SOME TIME TO EXECUTE

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("PROMISE2 RESOLVED NOW");
  }, 10000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("PROMISE3 RESOLVED NOW");
  }, 4000);
});

async function handlePromise2() {
  console.log("I GET PRINTED IMMEDIATELY");
  const val = await promise2;
  console.log("I WILL WAIT.");
  console.log(val);

  const val2 = await promise3;
  console.log("WILL I WAIT AGAIN?");
  console.log(val2);
}

handlePromise2();

/**how is async await different than handling promises :
 * - in the above example : after 10secs, we got our console.log statement.
 * - our JS engine was waiting for promise to resolve and it will wait and will only go to the next line once the promise gets resolved.
 */

/** how things work in callstack :
 * - intially call stack is empty, when we call handlePromise2 function, it comes inside our callstack, it will start executing the function lines one by one.
 * - the handlePromise2() will suspend and will move out of callstack.
 * i.e when we see the await keyword, the function execution suspends for that time.
 * It will wait till promise2 is resolved, then only it will move ahead.
 * after the given time, handlePromise2 will again come to the callstack and it will start executing from where it left.
 * JS engine isn't waiting for the promise to be resolved, but the handlePromise2() will suspend the execution till the promise is not resolved. [VERY VERY IMPORTANT]
 *
 */

/** using our older way of handling promises */

function getPromise2Data() {
  /** JS engine will not wait for the promise to be resolved. */
  promise3.then((res) => console.log(res));
  console.log("I GOT PRINTED !!");
}

getPromise2Data();
