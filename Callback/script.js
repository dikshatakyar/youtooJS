//executing callback :

function callMeBack(CallingYou) {
  console.log("trying to execute callaback!");
  CallingYou();
}

callMeBack(function CallingYou() {
  console.log("CALLING!");
});


//to do the async thing here :
setTimeout(()=> console.log("timer"), 5000);


