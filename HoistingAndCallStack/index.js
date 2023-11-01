// getName();
console.log(
  "x value : ",
  x
); /**memory was allocated but it has not been initialised
Hoisting : accessing JS variables/functions without initialising it */
console.log(getName);
console.log(
  "y val : ",
  y
); /** this gives us a reference error : accessing a variable from TDZ */


var x = 7;
let y = 12; /**LET and CONST are hoisted but they are in temporal dead zone
- TDZ : time between : the variable was hoisted till it was initialized
- to avoid TDZ : initialise it at top.
- LET and CONST are not attached to window(GLOBAL OBJECT) but are stored in seperate memory
*/

function getName() {
  console.log("we just ran!");
}
