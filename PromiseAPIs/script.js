/**
 * 1. Promise.all()
 * 
 * ==> suppose if we have to make parallel API call and get the results.
 * eg : we have 10 userIds and we need to make an API call to get userInfo.
 * ==> it is used to handle multiple calls together
 * ==> takes an array of promises as an input (in documentation, it is called iterable, as array is iterable).
 * ==> Promise.all([p1, p2, p3]);
 * it will make 3 parallel API calls and get the result.
 * - it will wait for all API calls to be finished.
 * suppose : p1 takes 3 seconds to get back the results, p2 takes 1s, p3 takes 2s to get fulfilled. Considering all the API calls were success, in that case our OUTPUT WOULD BE : an array with the result of all promise.
 * OUTPUT : [val1, val2, val3]
 *
 * ==> HOW MUCH TIME WILL IT TAKE?
 * 3 seconds ! (as all request are made in parallel, but it will wait for all of them to be finished).
 *
 * ==> WHAT IF ANY OF THE PROMISES FAILED?
 * Promise.all([p1, p2, p3])
 * this time, one of the promises gets rejected. P1 takes 3s, P2 takes 1s and P3 takes 2s, but after 1s, P2 gets rejected.
 * ==> AS SOON AS ANY OF THE PROMISE GETS REJECTED, Promise.all will THROW AN ERROR. (immediately as soon as the error happened, it will return the error, it will NOT even wait for other promises)
 * It is not possible to cancel the promises, so P1 and P3 will eventually accept/reject. But Promise.all won't wait for them.
 *
 *
 *
 *
 *
 *2.Promise.allSettled()
 * ==> What if we want results from successfull promises??
 *
 * we have another API for this
 * =====> Promise.allSettled([p1, p2, p3]);
 * - after 3s, we get the same result in case of all success.
 * - if one of these promise gets rejected (P2), this will still wait for all promises to get settled. i.e it will wait for all promises to complete, and these things are happening in parallel.
 * - it will give you all the results : [val1, err2, val3]
 * the OUTPUT : always an array of objects
 *
 *
 * =====> PROMISE.ALL IS KIND OF LIKE A "FAIL FAST" : EVEN IF ONE FAILS, IT QUICKLY TELLS FAILED
 * =====> PROMISE.ALLSETTLED WILL WAIT FOR ALL THE PROMISES.
 *
 *
 *
 *
 *
 * 3. Promise.race([p1, p2, p3])
 * ==> As the name suggest, it's a race, and the one who finishes first, would be the winner.
 * ==> As soon as the first promise is resolved (1s), after 1 sec, it will give me the result of val2. (value of IInd promise)
 * ==> OUTPUT : value of the first settled promise.
 * ==> Suppose if : p1 takes 3s, p2 takes 5s, p3 takes 2s and P3 FAILS AFTER 2s
 * ANS : ERROR WOULD BE THROWN FROM P3 after 2sec. Since it's returning the result of first settled promise, it doesn't care whether it's success or failure.
 *
 *
 *
 *
 *
 *
 *
 *
 * 4. Promise.any([p1, p2, p3])
 * ==> very much similar to race, whenever the first promise got resolved, it will WAIT FOR THE FIRST PROMISE TO GET SUCCESSFULL.
 * ==> waits for first resolved.
 * ==> it is a sucess seeking race. (seeking for first success)
 *
 * eg : P1 took 3s, P2 took 1s, P3 took 2s. but P2 failed, so it will return the value from P3.
 * ==> WHAT IF EVERYTHING FAILS??
 * ANS : result would be an AGGREGATED ERROR. It would be an array of all the three errors.
 *
 *
 *
 */

//implementing Promise.all

const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P1 SUCESS"), 3000);
  setTimeout(() => reject("P1 REJECTED"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 SUCESS"), 1000);
  setTimeout(() => reject("P2 REJECTED"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 SUCESS"), 2000);
  setTimeout(() => reject("P3 REJECTED"), 2000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

//--------------------------
//implementing Promise.allSettled (safest option)

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//implementing Promise.race

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

/**
 * - race : first settled promise(whether success/failure), it will result the value of the FIRST SETTLED PROMISE.
 * - KNOW THE LINGO !
 *    "SETTLED PROMISE" : you got the result
 *    once settled, it can go in 2 states : RESOLVED or REJECT.
 *    settled can be failure or sucess.
 *
 */

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors)
  });
/** Promise.any WAITS FOR FIRST SETTLED SUCCESS
 * - the aggregate error is returned in form of an object using console.log(err.errors)
 */
