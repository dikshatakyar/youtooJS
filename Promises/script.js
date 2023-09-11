/**
 * PROMISES ARE USED TO HANDLE ASYNC OPERATIONS IN JAVASCRIPT.
 *
 *
 * - control of program was given to other part in case of callback hell. Using promises, we can resolve that:
 */

const cart = ["shoes", "kurta", "tshirt"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWallet();
    });
  });
});

//CHANGING FROM CALLBACK HELL TO PROMISES :-

const promise = createOrder(cart);

/**
- this returns us a promise and promise is like an empty object with some data value in it. The data value will hold whatever the API will return to us.
- {data : undefined}

 * after some time, the promise object will be filled with data automatically.

- the above example, once we have the order details, we attach a callback function to promise object.
 */

promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(
    function (paymentInfo) {
      return showOrderSummary(paymentInfo);
    }.then(function (paymentInfo) {
      return updateWallet(paymentInfo);
    })
  );
//whenever we attach a lot of callback in this promise chain, we use to pipe the data, we want the data to flow in the whole chain. for that, we need to return the promise when we are chaining it.

// {data : orderDetails}
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

/** here we have control of our programe, promises gives us the trust, that it would be called whenever there is data in the object. this function will definitely be called and it will be called ONLY ONCE */

const GITHUB_API = "https://api.github.com/users/dikshatakyar";

const user = fetch(GITHUB_API);
/** API given by browser to us, to make external call
 * - it returns a promise.
 * - we get a promise object inside user.
 *
 */

/**
 * RESULT OF PRIMISE - will store whatever data fetch() will return.
 * STATE OF PROMISE - in what state the promise is, initially, it would be pending and (once we got the data back) then fulfilled.
 */

console.log(user);
/** it shows pending, but expanding the state shows fulfilled.
 *
 * - when the console log statement is executed, at that point, the promise is in pending state. JS engine does not waits for anything and quikly executes it.
 * - it take some time for the promise to get fulfilled, js does not wait and print the statement to the console.
 * - when we expand it, it shows the CURRENT STATE. that's why there's inconsistency.
 */

user.then(function (data) {
  console.log(data);
});

/** PENDING, FULFILLED, REJECTED ARE THE ONLY STATE IN PROMISE.
 * PROMISE OBJECTS ARE IMMUTABLE(no one can mutate the data, we have control over the object).
 *
 */

/** NOTES :
 *
 * 1. DEFINE PROMISE :
 * DEFIN1 --> PROMISE OBJECT IS A PLACEHOLDER WHICH WILL BE FILLED LATER WITH A VALUE FROM A ASYNCHRONOUS OPERATION.
 *
 *
 * DEFINE2 ==> A CONTAINER FOR FUTURE VALUE
 *
 * DEFINE3 ===> A PROMISE IS AN OBJECT REPRESENTING THE EVENTUAL COMPLETION OR FAILURE OF AN ASYNCHRONOUS EVENT.
 */
