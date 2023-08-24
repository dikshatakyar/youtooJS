//task is to count how many times the button is clicked(use closures), and we have to print it

function attachEventListener() {
  let count = 0;
  document
    .getElementById("btn")
    .addEventListener("click", function whatHappens() {
      console.log("Button Clicked !", ++count);
    });
}


attachEventListener();