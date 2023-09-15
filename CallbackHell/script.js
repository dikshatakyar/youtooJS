/**
 * CALLBACKS :
 *
 * whatever code we give, it will be quickly executed by javascript.
 * but in case, if we had to wait for something, it requires callback implementation
 */

// setTimeout(function () {
//   console.log("HELLO");
// }, 5000);

/** using callback, we can implement asynchronous things in JS. */

/**EXAMPLE : SUPPOSE WE ARE BUILDING AN E-COMMERCE WEBSITE
 *
 *
 * - we create an order and once it is created then only we can proceed to payment. and later show an order summary page; after that update the wallet.
 *
 * - it is an async operation, so we can see CALLBACK in this picture :
 */

const cart = ["shoes", "kurta", "tshirt"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

/**here we created a flow, and there is a dependency, and APIs are now dependent on one after the other, we end up falling into CALLBACK HELL. and our code starts to grow horizontally, and it reduces the readibility of code.
 * this structure is also known as PYRAMID OF DOOM.
 * 
*/

/**
 * INVERSION OF CONTROL :- 
 * you lose the control of your code when we are using callback. we gave the control of our programme to a specific API and we are blindly trusting it. if the API was full of bugs or the callback function was never called, or the function happens twice (because we don't know what's happening in our API).
 * 
 * 
 */

/**
 * 2 main problems of callback :
 * - callback hell : one callback inside another.
 * - inversion of control : lose the control of code while using callback.
 */
