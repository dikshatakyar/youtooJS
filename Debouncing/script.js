/**
 * website should be performant.
 * useful in real-life
 *
 * consider : API calls are not made for every keystroke in an e-commerce website, it makes call after a pause. This type of functionality is called DEBOUNCE.
 */

let counter = 0;
const getData = () => {
  //calls an API and gets data
  console.log("Fetching Data...", counter++);
};

/**to solve the problem of calling getData() again and again, we should come up with some other function which should do some magic and don't make it call again and again on every keystroke, rather call whenever the user takes a pause,
 * eg : if only the difference of time b/w 2 keypressed is >300ms, then only fetch from the API
 */

/** take 2 args : function and delay  */

const debounce = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}; 

const betterFunction = debounce(getData, 300);


/**
 * Uses : lazy loading
 */