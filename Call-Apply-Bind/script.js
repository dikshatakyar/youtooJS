//CALL

let Name = {
  firstName: "Diksha",
  lastName: "Takyar",
  printFullName: function (homeTown) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown);
  },
  /** Note : we cannot use an arrow function in printFullName as Arrow functions have a different behavior for the this keyword compared to regular functions. In arrow functions, this refers to the enclosing context, which is usually the global context, rather than the object itself.*/
};

Name.printFullName("Delhi");

/**
 * suppose I want to create another object and want a printFullName, one method could be to copy the same object again, but that's not a good way to do it.
 *
 * CALL METHOD :- we can do a function borrowing with it.
 * i.e borrow functions from other objects and simply use it with the data of other objects
 */

let Name2 = {
  firstName: "Vandana",
  lastName: "P",
};
Name.printFullName.call(Name2, "Kerela");
/** function borrowing : call() parameter : reference i.e what we want "this" to be pointing to*/

/** BETTER WAY :  It's better to have printFullName function outside the object and then use the same for Name1 
 * eg : const printFullName =  function () {
    console.log(this.firstName + " " + this.lastName);

    - for Name1 we can use : printFullName(Name);
  */

//---------------------------------

//APPLY

/** In call method, we pass the arguments individually with a comma, but in apply, we will pass it in the second argument as an ARRAY LIST
 * (see example below :- )
 */

const Naam = {
  firstName: "Ishank",
  lastName: "Bansal",
};

const ApplyTheName = function (homeTown, state, age) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      ", " +
      state +
      ". Age of that person: " +
      age
  );
};

ApplyTheName.apply(Naam, ["Dholakpur", "Rajasthan", "22"]);

const Naam2 = {
  firstName: "Aishanya",
  lastName: "Singh",
};

ApplyTheName.apply(Naam2, ["Bhatinda", "Punjab", "20"]);

//BIND METHOD

/** similar to call()
 * difference : instead of directly calling, the bind method binds a function with an object and returns us the copy of that method
 * it will return us a method which can be called later
 * gives us a copy which can be invoked later
 */

const GName = {
  firstName: "Shashwat",
  lastName: "Pandey",
};

let printMyName = ApplyTheName.bind(GName, "Gaya", "Bihar", "23");

printMyName();
// console.log(printMyName);

/**
 * SUMMARY :
 * - CALL : used to invoke a function directly by passing in reference which points to "this"
 * - APPLY : similar to call, just takes second arg as array
 * - BIND :does not directly invoke, but gives a copy of that method
 */
