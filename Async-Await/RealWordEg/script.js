/**
 * making a fetch call and handle with async await
 *
 * HOW FETCH WORKS
 * - fetch() is a promise, when this promise is resolved, it gives response object, response object has a body which is a readable stream.
 * to convert readible stream to json => response.json() {this is again a promise and gives us json value}
 * data.json is also a promise
 */

const API_URL = "https://api.github.com/users/dikshatakyar";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();

// handlePromise().catch((err) => console.log(err));
/**
 * handlePromise suspends the execution of the promise till the promise is not resolved
 * handlePromise() started executing, saw await and waited for the promise to be resolved.
 * it got suspended, till it got resolved.
 * then it waited for data.json to be resolved, once we got the value, it got printed.
 */

/** how we write it normally without async await : */

// fetch().then(res => res.json()).then(res => console.log("PROMISES"));
/** fetch returns a response, then we convert it into JSON */

/** using normal promise, we had a .catch() method, but in async await, we have a try-catch */

/** async await is just a syntatic sugar over then() and catch().
 * BTS --> JS is using its own .then() .catch()
 *
 * difference is how you write
 *
 * when we write await, we don't need a lot of promise chaining, and makes sense when we write code. also easier for some to read.
 */
