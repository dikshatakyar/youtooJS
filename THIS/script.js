"use strict";

/**THIS IN GLOBAL SPACE
 * - whatever is there outside is the global space
 */

console.log("this in global space: ", this);
/**gives output : window object
 * - Window : this will always have the value of global object in global space.
 * - window represents the global object
 * - js does not only runs inside a browser. Wherever JS runs, there is a JRE(runtime envir).
 * - Inside the browser, global object is differnet, inside Node.js global object is different.
 * - VALUE OF THIS KEYWORD WOULD BE GLOBAL OBJECT.
 * - in case of browser, global object would be window. in case of Node.js the value would be global.
 */

/**THIS INSIDE A FUNCTION */
function x() {
  console.log(this);
}
x();
/**
 * - this keyword works differently in strict mode and non-strict mode
 * - strict mode has stricter rules
 * - if we are inside a function, this value depends on strict/non-strict mode.
 * - value would be window(non-strict)
 * - value = undefined (strict)
 * - there is a phenomena : THIS SUBSITUTION.
 * - if the value of this keyword is undefined or null, "this" will be replaced with global object (only in NON-STRICT MODE)
 * - summarizing : this keyword inside a function is UNDEFINED. But because, JS has "THIS SUBSITUTION", so the value becomes equal to global object if we will use NON-STRICT mode.
 */

/** IMP
 * - Value of this keyword depends on HOW IT IS CALLED.
 * - calling as x() : undefined
 *  */

// window.x();
/**now the value becomes window */

/**
 * - if fn is called without any reference of object, then the value is undefined.
 * - but if window.x() is called, it prints window object.
 */

//----------------------------

/**THIS inside a object's method
 *
 * - if u make function as a part of object, then it is known as method.
 */

const student = {
  name: "Diksha",
  //method
  printName: function () {
    // console.log("inside obj: ", this);
    console.log(this.name);
  },
};
student.printName();

/** - whenever we are inside the method, value of this keyword is the object where the method is present.
 * - it will print the object
 */

/**
 * - CALL, APPLY & BIND
 * - it is used when we have to share methods
 */

const student2 = {
  name: "Vandana",
  //if i want to share printName function here, we can use call apply bind
};

/**
 * 
student2.printName();
^ we cannot use printName with student2 directly
- we can reuse the method by OVERRIDING THE VALUE OF THIS KEYWORD
*/

student.printName.call(student2);

/**
 * .call() will take the value of this keyword inside it.
 * - we called the same method but with a different value of THIS
 */

/**THIS INSIDE ARROW FXNS
 * - ARROW FXNS DO NOT HAVE THEIR OWN THIS
 * - THEY TAKE THE VALUE OF THEIR LEXICAL ENVIRONMENT WHERE THEY ARE ENCLOSED.
 *
 */

const obj = {
  a: 10,
  x: () => {
    console.log("inside arrow fxn: ", this);
  },
};

obj.x();

/**
 * Lexical means how it is written in the code (where the object is lexically present inside the scope).
 * - it is present in global space, it will behave like it is present in the global space.
 * - the value would be window object once again.
 * - it is not inside the global space, but it is enclosed inside the global space.
 * - it retains this value of the enclosing lexical context
 */

/**THIS inside nested arrow function */

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log("nested arrow function: ", this);
    };
    y();
  },
};

obj2.x();

/**arrow function is enclosed inside a function which is the method of the object
 * - THIS keyword behaves exactly like how it would behave inside the enclosing lexical context
 * - ARROW FUNCTION DON'T PROVIDE THEIR OWN THIS BINDING
 */

const objj = {
  p: 9,
  method1: () => {
    const method2 = () => {
      console.log("outer this: ", this);
    };
    method2();
  },
};

objj.method1();
/**o/p : window object */



/**inside the DOM element : reference to HTMLelement */
