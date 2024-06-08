/**
 * inheritance as a concept is totally different in JS.
 * - it is one object trying to access properties of other object
 *
 */

let arr = ["Diksha", "Vandana"];

/**
 * arr. gives a lot of properties to us, we didn't define it, so this is where PROTOTYPE comes in.
 *
 * when we create a JS object, JS engine automatically attaches our object with some hidden properties and function, its not only in case of object, in case of function we get a lot of properties, so these come via prototype
 */

let object = {
  Name: "Diksha",
  City: "Delhi",
  getIntro: function () {
    console.log(this.Name + " from " + this.City);
  },
};

/**
 * JS engine attaches an object to our original object and that is how we get access to properties
 * to access the hidden object, we can access it using :
 * arr.__proto__.concat
 *
 * --> just an object which is attached to arr/func/object and it gives access to all properties
 *
 * each and every object in javascript has a prototype i.e :
 * arr.__proto__.__proto__ this is equivalent to : Object.prototype
 *
 * arr.__proto__.__proto__.__proto_ (NULL)
 */

/**
 * everything in javascript is nothing but an object. down the prototype chain, it ends up being an object.
 *
 */

let object2 = {
  Name: "Vandana",
};

//not advisable :
object2.__proto__ = object;
/**now we can access the properties and methods in object's property
 *
 * Object2.City gave as Delhi, when we try to acess any property, it will check on object2, if it does not finds it, it goes to it's proto. THIS IS CALLED PROTOTYPAL INHERITANCE.
 * 
 * 
 * 
 * 
 * object2.getIntro();
 * (finds the name from object2 and finds city from it's prototype)
 */



