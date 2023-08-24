console.log("start");


setTimeout(function cb(){
    console.log("CALLBACK?")
}, 5000);


console.log("end");

/** if suppose we had a million lines after this, which would take 10 seconds to execute. Then, the cb() in setTimeout() would be printed only after those 10 seconds. 
 * So, a setTimeout of 5 seconds does not always mean that it would take only 5 Seconds, it means that it would take atleast 5 seconds.
 * if there are lines below setTimeout() that take a lot of time to execute, GLOBAL EXECUTION CONTEXT is still there in the callstack until those lines are finished. If the time is too much, it also means, blocking the main thread (call stack).
 * an example of this is shown below
 */

let StartDate = new Date().getTime();
let EndDate = new Date().getTime();

while(EndDate < StartDate+10000){
    EndDate = new Date().getTime();
}

console.log("WHILE EXPIRES");

/**
 * now, we see that setTimeout would be printed after the whole process has been completed.
 */