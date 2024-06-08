/**
 * limit the rate so that API call is  not made on each and very event.
 * Throttling delays the next call for some time being.
 */

const expensive = () => {
  console.log("expensive");
};

/** for each an every event, this would be called, thousands of resize trigger and it is being called */
window.addEventListener("resize", expensive);


//BETTER WAY :
const throttle = (fxn, limit) => {
    //we made a closure over here, so that we do not re-initialize our flag again and again  
    let flag = true;
    return function () {
      fxn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    };
  };
  

const betterFunc = throttle(expensive, 800);

window.addEventListener("resize", betterFunc);

