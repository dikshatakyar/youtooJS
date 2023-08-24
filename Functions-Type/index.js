// Statement();
// expression();

/** -->Function Statement aka Function Declaration
 * it is the way of creating a function.
 */
function Statement() {
  console.log("this is a function statement");
}

//------------------------------------------------------------------------------------------------------------

/** -->Function Expression
 * fxns can be assigned to a variable also, fxn acts like a value.
 */
const expression = function () {
  console.log("Function Expression");
};

Statement();
expression();

/** MAIN DIFFERENCE BETWEEN THE TWO ABOVE FUNCTIONS :-
 * ""HOISTING""
 * suppose we call the functions at the top. during the memory creation phase, Statement() is assigned a memory and the function is assigned.
 * But in case of expression, it is assigned "undefined" initially until the code hits the line itself
 */

//------------------------------------------------------------------------------------------------------------------

/** -->ANONYMOUS FUNCTION
-  does not have their own indentity */

const anon = function () {
  console.log("this is an anonymous function");
};
anon();

/**
Example :-
function(){
    //this will give us a syntax error 
}
this is because a function statement always require a function name
- anonymous function are used in a place where functions are used as values
- that means we can use it to assign some variable (just like function expression)
*/

//------------------------------------------------------------------------------------------------------------------

/** -->NAMED FUNCTION EXPRESSION
 * giving name to anonymous function:
 * have the name of the function itself and then put it into an expression.
 */

const myNameis = function NamedFunc() {
  console.log("This is a Named Function");
  console.log(NamedFunc);
};

myNameis();

/**
 * Corner cases :
 * we cannot call NamedFunc();
 * as NamedFunc() is not created in the global scope, but created as a global variable, that is we can only access the function inside the function.
 * EG :
 * const myNameis = function NamedFunc() {
  console.log(NamedFunc); //this will give the body 
};
 */

//-------------------------------------------------------------------------------------------------------------

/**--> FIRST CLASS FUNCTIONS
 * - FUNCTIONS ARE FIRST CLASS CITIZEN
 * - we can easily pass function inside another function in arguments.
 * - we can also return a function from a function.
 * - ability to use functions as values and then pass an arg to another function and can be returned from another function
 */

const firstClass = function (passMe) {
  return function secondClass() {
    console.log(passMe);
    console.log("FIRST CLASS FUNCTION");
  };
};

const passMe = function () {
  console.log("I can be passed inside a function");
};

firstClass(passMe)();

//-------------------------------------------------------------------------------------------------------------

