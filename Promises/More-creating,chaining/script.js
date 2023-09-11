const cart = ["shoes", "pants", "kurta"];

//create an order with the cart items :

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    //if promise gets rejected
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("NO MATTER WHAT HAPPENS, I WILL DEFINITELY BE CALLED.");
  });

/** WHENEVER WE HAVE CHAINING THINGS UP, WE NEED TO KEEP RETURNING THINGS FROM DOWN TO OTHER.....
 * WHATEVER WE NEED TO PASS IN DOWN THE CHAIN, WE NEED TO RETURN IT FROM TOP OF THE CHAIN.
 * -- if any of the step failed, everything would fail.
 * -- catch has the responsibility to check for error only to the top of it.
 */

/// / / / / / / / // / / / //
/**
 * HOW TO CREATE A PROMISE :-
 *
 * ==> using new keyword and a Promise constructor.
 * ==> it takes a function with to params : resolve and reject.
 * ==> resolve and reject are given by JS to design promises.
 */

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderID (returned as a success)
    if (!validateCart(cart)) {
      //throw an error
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      //whatever data gets passed in resolved gets to our callback function where we have attached our promise
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  //now this will return a promise
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return true;
  // return false; //reject our promise
}

/** ERROR HANDLING
 * - promise also comes with another function "catch", just like then.
 * we can attach a failure callback to it.
 * whenever we are writing any promise, we should always write the catch statement to handle the errors gracefully.
 */
