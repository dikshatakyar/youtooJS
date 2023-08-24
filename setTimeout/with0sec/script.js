console.log("START");


setTimeout(function cb(){
    console.log("CALLBACK FUNCTION")
}, 0);


console.log("END");


/** ==> even in case of zero seconds, it registers the callback function into the web-api's environment and javascript does not waits for anything, it prints the other console. now callback will move to the callbackQueue and when the callstack would be empty, only then the callback function will execute */