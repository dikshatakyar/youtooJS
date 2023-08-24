/**
 * polyfill - browser fallback
 * i.e browser does not supports a bind function, in that case, we have to write our own bind function
 */


const Name = {
    firstName : "Diksha",
    lastName : "Takyar"
}

const printName = function(){
    console.log(this.firstName + " " + this.lastName);
}

printName(Name);

/** Our task is to write our own implementation of BIND function */

