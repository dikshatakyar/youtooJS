/**
 * PROMISES ARE USED TO HANDLE ASYNC OPERATIONS IN JAVASCRIPT.
 *
 *
 * - control of program was given to other part in case of callback hell. Using promises, we can resolve that:
 */

const cart = ["shoes", "kurta", "tshirt"];

const promise = createOrder(cart);
/**
- this returns us a promise and promise is like an empty object with some data value in it. The data value will hold whatever the API will return to us.
- {data : undefined}

 * after some time, the promise object will be filled with data automatically.

- the above example, once we have the order details, we attach a callback function to promise object.
 */

// {data : orderDetails}
promise.then(function (orderId) {
  proceedToPayment(orderId);
});
/** here we have control of our programe, promises gives us the trust, that it would be called whenever there is data in the object. this function will definitely be called and it will be called ONLY ONCE */



const GITHUB_API = "https://api.github.com/users/dikshatakyar" 


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

